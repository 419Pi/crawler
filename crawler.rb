require 'httparty'
require_relative('node.rb')

class Crawler
  attr_reader :visited, :root

  def initialize(url, limit, keyword)
    @root = Node.new(nil, url)
    @seen = {url => true}
    @limit = limit.to_i
    @keyword = keyword
    @queue = [@root]
  end

  def crawl
    while @seen.length < @limit && !@queue.empty?
      puts @seen.length
      node = dequeue
      parse(node) unless node.nil?
    end
  end

  def enqueue(parent, url)
    return if @seen[url] || @seen.length > @limit
    @seen[url] = true
    node = Node.new(parent, url)
    @queue.unshift(node)
  end

  def parse(node)
    return if node.url.nil?
    begin
      url = node.url
      puts "crawling #{url}"
      response = HTTParty.get(url).force_encoding("ISO-8859-1").encode!("UTF-8")
      if @keyword
        if response.match(/(^|\s+)#{@keyword}(\s+|$|[\p{P}\p{S}])/i)
          node.keyword = true
          @queue = []
          return
        end
      end
      response.scan(/<a.+?href="(.+?)"/).each do |link|
        link = link.join('').chomp('/')
        next if !link.match(/^\/?[a-zA-Z]+/)
        if (link[0] == '/')
          enqueue(node, url + link)
        else
          enqueue(node, link)
        end
      end
    rescue => e
      puts e
      return
    end
  end
end