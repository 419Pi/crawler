require 'httparty'
require 'nokogiri'
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

  def dequeue
    @queue.pop
  end

  def parse(node)
    return if node.url.nil?
    begin
      url = node.url
      puts "crawling #{url}"
      response = HTTParty.get(url)
      doc = Nokogiri::HTML(response)
      doc.css('a').take(10).each do |link|
        next if link['href'].nil? || !link['href'].match(/^\/?[a-zA-Z]+/)

        href = link['href'].chomp('/')

        if (href[0] == '/')
          enqueue(node, url + href)
        else
          enqueue(node, href)
        end
      end
    rescue
      return
    end
  end
end