require 'httparty'
require_relative('node.rb')

class Crawler
  attr_reader :visited, :root

  def initialize(url)
    @root = Node.new(nil, url)
    @seen = {url => true}
    @queue = [@root]
  end

  def crawl
    while @seen.length < 100 && !@queue.empty?
      node = dequeue
      parse(node) unless node.nil?
    end
  end

  def enqueue(parent, url)
    return if @seen[url]
    @seen[url] = true
    node = Node.new(parent, url)
    @queue.unshift(node)
  end

  def parse(node)
    return if node.url.nil?
    begin
      url = node.url
      puts "crawling #{url}"
      response = HTTParty.get(url)
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