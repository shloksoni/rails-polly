class PollsController < ApplicationController
 before_action :authenticate_user_using_x_auth_token, except: :index
 before_action :load_poll, only: :show
 before_action :load_options, only: :show 

  def index
    polls = Poll.all
    render status: :ok, json:  polls
  end

  def create
    poll = Poll.new(load_params.merge(user_id: @current_user.id))
    if poll.save
      render status: :ok, json: {
        notice: t('successfully_created', entity: 'Poll')
      }
    else
      errors = poll.errors.full_messages
      render status: :unprocessable_entity, json: { errors: errors }
    end
  end
  
  def show
    render status: :ok, json:{
      poll: @poll, options: @options
    }
  end

  private
    def load_params
      params.require(:poll).permit(:title, :option_attributes => [:id, :content])
    end
    
    def load_poll
      @poll = Poll.find(params[:id])
    end
    def load_options
      @options = Option.where(polls: @poll.id)
    end
end
