# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
new_user = User.create(email: "user@gmail.com", password: "q5qcjtxu")
new_list = List.create(name: "My List", user_id: 1)
new_list2 = List.create(name: "My Other List", user_id: 1)

movie_a = Movie.create(
	data_id: 927, 
	title: "Gremlins",
	tagline: "Don't get him wet, keep him out of bright light, and never feed him after midnight.",
	poster_path: "/5t16qsvUmksew50X0o6D5y0lrJM.jpg",
	runtime: "106",
	watched: true,
	overview: "When Billy Peltzer is given a strange but adorable pet named Gizmo for Christmas, he inadvertently breaks the three important rules of caring for a Mogwai, and unleashes a horde of mischievous gremlins on a small town."
	)
movie_b = Movie.create(
	data_id: 928, 
	title: "Gremlins 2: The New Batch",
	tagline: "Here they grow again.",
	poster_path: "/mkWD9W27JYmQPbgcryPBdI2cF4r.jpg",
	runtime: "106",
	watched: true,
	overview: "Young sweethearts Billy and Kate move to the Big Apple, land jobs in a high-tech office park and soon reunite with the friendly and lovable Gizmo. But a series of accidents creates a whole new generation of Gremlins. The situation worsens when the devilish green creatures invade a top-secret laboratory and develop genetically altered powers, making them even harder to destroy!"
	)
movie_c = Movie.create(
	data_id: 11, 
	title: "Star Wars",
	tagline: "Don't get him wet, keep him out of bright light, and never feed him after midnight.",
	poster_path: "/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg",
	runtime: "106",
	overview: "When Billy Peltzer is given a strange but adorable pet named Gizmo for Christmas, he inadvertently breaks the three important rules of caring for a Mogwai, and unleashes a horde of mischievous gremlins on a small town."
	)
movie_d = Movie.create(
	data_id: 1893, 
	title: "The Phantom Menace",
	tagline: "Here they grow again.",
	poster_path: "/n8V09dDc02KsSN6Q4hC2BX6hN8X.jpg",
	runtime: "106",
	overview: "Young sweethearts Billy and Kate move to the Big Apple, land jobs in a high-tech office park and soon reunite with the friendly and lovable Gizmo. But a series of accidents creates a whole new generation of Gremlins. The situation worsens when the devilish green creatures invade a top-secret laboratory and develop genetically altered powers, making them even harder to destroy!"
	)

new_list.movies << movie_a
new_list.movies << movie_b

new_list2.movies << movie_b
new_list2.movies << movie_c
new_list2.movies << movie_d