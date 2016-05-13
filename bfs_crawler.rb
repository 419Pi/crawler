require_relative('crawler.rb')
require_relative('node.rb')

class BFS_Crawler < Crawler
  def dequeue
    @queue.pop
  end
end