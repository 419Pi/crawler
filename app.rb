require 'sinatra'
require_relative('crawler.rb')

get '/' do
  File.read('index.html')
end

get '/crawl' do
  url = params['url']
  crawler = Crawler.new(url)

  crawler.crawl
  crawler.root.to_json
end
