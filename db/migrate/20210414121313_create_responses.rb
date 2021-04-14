class CreateResponses < ActiveRecord::Migration[6.1]
  def change
    create_table :responses do |t|
      t.references :poll, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.references :option, null: false, foreign_key: true
      t.timestamps
    end
  end
end
