class MoviesController < ApplicationController

	def create
		@user = User.first
		@list = List.last
		response.set_header('Access-Control-Allow-Origin', '*')

		movie = Movie
		movie = Movie.create(movie_params)
		@list.movies << movie
    	render json: movie, status: 201
	end


private

  def movie_params
    params.permit(:title, :poster_path, :data_id, :watched, :runtime, :tagline, :overview)
  end

end
