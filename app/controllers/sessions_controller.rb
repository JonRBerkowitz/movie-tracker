class SessionsController < ApplicationController

	def create
		@user = User.find_by(:username => params[:username])

		if @user && @user.authenticate(params[:password])
			@session = @user.id
			render json: @session, status: 201
		end
	end

end