class AddForeignKeyToPolls < ActiveRecord::Migration[6.1]
  def change
    add_foreign_key :polls, :users, column: :creator_id, on_delete: :cascade
  end
end
