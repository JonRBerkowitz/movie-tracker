class ListsController < ApplicationController

	def index
		@lists = List.all
		render json: @lists.to_json(include: :movies)
	end

	def show
		@list = List.find_by(params[:id])
		render json: @list.to_json(include: :movies)
	end

end
