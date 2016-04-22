require 'httparty'
require 'nokogiri'
require_relative('node.rb')

class Crawler
  attr_reader :visited, :root

  def initialize(url)
    @root = Node.new(nil, url)
    @seen = {url => true}
    @queue = [@root]
    @counter = 0
  end

  def crawl
    while @counter < 3
      node = dequeue
      puts node.url
      parse(node)
      @counter += 1
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
    url = node.url
    puts url
    response = HTTParty.get(url)
    doc = Nokogiri::HTML(response)
    doc.css('a').each do |link|
      next if link['href'].nil? ||
        link['href'][0..1] == '//' ||
        link['href'][0] == '#'

      href = link['href'].chomp('/')

      if (href[0] == '/')
        enqueue(node, url + href)
      else
        enqueue(node, href)
      end
    end
  end
end