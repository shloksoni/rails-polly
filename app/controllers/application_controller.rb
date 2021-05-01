class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  
  include Authenticable
  
  private
  
  def current_user
    @current_user
  end
end
