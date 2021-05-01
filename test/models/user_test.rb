require "test_helper"

class UserTest < ActiveSupport::TestCase
  def setup
    @user = User.create(name: 'Sam Smith',
                         email: 'sam@example.com',
                         password: 'welcome',
                         password_confirmation: 'welcome')
  end

  def test_user_should_be_not_be_valid_without_name
    @user.name = ''
    assert_not @user.valid?
    assert_equal ["Name can't be blank"], @user.errors.full_messages
  end

  def test_name_should_be_of_valid_length
    @user.name = 'a' * 50
    assert @user.invalid?
  end

  def test_instance_of_user
    assert_instance_of User, @user
  end
  
  def test_not_instance_of_user
    poll = Poll.new
    assert_not_instance_of User, poll
  end


end
