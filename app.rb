require 'sinatra'
require_relative('bfs_crawler.rb')
require_relative('dfs_crawler.rb')

get '/' do
  File.read('index.html')
end

get '/crawl' do
  url = params['url']
  type = params['type']
  keyword = params['keyword']
  if type == 'BFS'
    crawler = DFS_Crawler.new(url, keyword)
  elsif type == 'DFS'
    crawler = BFS_Crawler.new(url, keyword)
  else
    return "Type not recognized"
  end
  crawler.crawl
  crawler.root.to_json
end

