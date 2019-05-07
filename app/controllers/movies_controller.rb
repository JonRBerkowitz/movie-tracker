class MoviesController < ApplicationController

	def create
		response.set_header('Access-Control-Allow-Origin', '*')

		@user = User.first
		@list = List.find(params[:list_id])

		@movie = Movie.new(movie_params)

		user_movies = @user.movies.where(data_id: @movie.data_id)[0]

		if user_movies == nil
			@movie.save
			@list.movies << @movie
			status = 201
		else
			status = 500
    	end

    	render json: @movie, status: status
	end


private

  def movie_params
    params.permit(:title, :poster_path, :data_id, :watched, :runtime, :tagline, :overview)
  end

end
