class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.integer :data_id
      t.string :title
      t.string :tagline
      t.string :overview
      t.string :runtime
      t.string :poster_path
      t.boolean :watched, default: false
      t.timestamps
    end
  end
end
