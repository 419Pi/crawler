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
  if params['limit'] != ''
    limit = params['limit']
  else
    limit = 100
  end
  if type == 'BFS'
    crawler = DFS_Crawler.new(url, limit, keyword)
  elsif type == 'DFS'
    crawler = BFS_Crawler.new(url, limit, keyword)
  else
    return "Type not recognized"
  end
  crawler.crawl
  crawler.root.to_json
end

