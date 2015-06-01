require 'test_helper'

class PostsControllerTest < ActionController::TestCase
  get :index
  assert_response :success
end
