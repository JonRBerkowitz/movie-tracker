class MoviesController < ApplicationController
  before_action :authenticate_user

  def index
  	@movies = Movie.all
  	render json: @movies, status: 200
  end

	def create
		response.set_header('Access-Control-Allow-Origin', '*')

		@user = current_user
		@list = List.find(params[:list_id])

		@movie = Movie.new(movie_params)

		user_movies = @user.movies.where(data_id: @movie.data_id)[0]
		@list_movies = @list.movies.where(data_id: @movie.data_id)[0]

		if user_movies == nil
			@movie.save
			@list.movies << @movie
			render json: @movie, status: 201
		elsif @list_movies == nil
			@list.movies << user_movies
			render json: user_movies, status: 201
		end
	end


private

  def movie_params
    params.permit(:title, :poster_path, :data_id, :watched, :runtime, :tagline, :overview)
  end

end
