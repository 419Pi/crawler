require_relative('crawler.rb')
require_relative('node.rb')

class DFS_Crawler < Crawler
  def dequeue
    @queue.shift
  end
end