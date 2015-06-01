require 'test_helper'

class PostsControllerTest < ActionController::TestCase
  test 'should get articles index' do
    get :index
    assert_response :success
  end

  test 'should render new post form' do
    get :new
    assert_response :success
  end
end
