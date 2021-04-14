class CreateOptions < ActiveRecord::Migration[6.1]
  def change
    create_table :options do |t|
      t.text :content
      t.references :polls, null: false, foreign_key: true
      t.timestamps
    end
  end
end
