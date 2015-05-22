class CreatePieces < ActiveRecord::Migration
  def change
    create_table :pieces do |t|
      t.string :color
      t.integer :position
      t.boolean :jumped

      t.timestamps null: false
    end
  end
end
