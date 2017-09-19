class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :name, null: false
      t.float :price, null: false
      t.string :category, null: false
      t.text :description

      t.timestamps
    end
  end
end
