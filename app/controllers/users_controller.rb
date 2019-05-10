class UsersController < ApplicationController

	def index
		@users = User.all
		render json: @users
	end

	def show
		
	end

	private

	def user_params
	    params.require(:user).permit(:email, :password)
	end

end
