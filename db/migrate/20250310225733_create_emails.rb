class CreateEmails < ActiveRecord::Migration[8.0]
  def change
    create_table :emails do |t|
      t.references :person, null: false, foreign_key: true
      t.string :email

      t.timestamps
    end
  end
end
