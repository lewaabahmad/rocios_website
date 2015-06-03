require 'test_helper'

class PostTest < ActiveSupport::TestCase
  def setup
    @valid_post = Post.new
    @invalid_post_one = Post.new
    @invalid_post_two
  end
end
