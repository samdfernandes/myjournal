class CreateEntries < ActiveRecord::Migration[6.0]
  def change
    create_table :entries do |t|
      t.string :title
      t.string :text
      t.string :img
      t.string :counters

      t.timestamps
    end
  end
end
