class ListsController < ApplicationController

	def index
		@user = User.first
		@lists = @user.lists
		render json: @lists.to_json(include: :movies)
	end

	def show
		@list = List.find(params[:id])
		render json: @list.to_json(include: :movies)
	end

	def update
		@list = List.find(params[:list_id]).movies
		@movie = Movie.find(params[:movie_id])

		@list.delete(@movie)
		render json: @movie, status: 201
	end

end
