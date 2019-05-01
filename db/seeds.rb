# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
new_user = User.create(username: "Jon", password: "pass")
new_list = List.create(name: "My List", user_id: 1)
movie_a = Movie.create(id: 927)
movie_b = Movie.create(id: 928)

new_list.movies << movie_a
new_list.movies << movie_b