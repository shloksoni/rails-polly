class RenamePollsIdToPollId < ActiveRecord::Migration[6.1]
  def change
    rename_column :options, :polls_id, :poll_id
  end
end
