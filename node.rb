require 'json'

class Node
  attr_accessor :children, :keyword
  attr_reader :url, :parent

  def initialize(parent = nil, url)
    @url = url
    @parent = parent
    @parent.children.push(self) unless @parent.nil?
    @children = []
  end

  def to_json
    hash = {url: @url, keyword: @keyword, children: @children.map {|child| child.to_json}}
    @parent.nil? ? hash.to_json : hash
  end
end