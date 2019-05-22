class ListsController < ApplicationController

	def index
		@user = current_user
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

	def create
		@list = current_user.lists.build(list_params)
		@list.save
		render json: @list, status: 201 
	end

	def destroy
		@lists = current_user.lists
		@list = List.find(params[:id])
		
		if @lists.length > 1
			@list.destroy
		end

		render json: params[:id].to_json, status: 200
	end

	private

	def list_params
		params.permit(:name, :movies)
	end

end