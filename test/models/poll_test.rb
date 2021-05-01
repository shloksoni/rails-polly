require "test_helper"

class PollTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  def test_instance_of_poll
    poll = Poll.new;
    assert_instance_of Poll, poll
  end
end
