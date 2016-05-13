require 'sinatra'
require_relative('bfs_crawler.rb')
require_relative('dfs_crawler.rb')

get '/' do
  File.read('index.html')
end

get '/crawl' do
  url = params['url']
  type = params['type']
  if type == 'dfs'
    crawler = DFS_Crawler.new(url)
  elsif type == 'bfs'
    crawler = BFS_Crawler.new(url)
  else
      return "Type not recognized"
  end
  crawler.crawl
  crawler.root.to_json
end

