class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string   :name
      t.integer  :company_id
      t.string   :price
 
      t.timestamps
    end
  end
end
