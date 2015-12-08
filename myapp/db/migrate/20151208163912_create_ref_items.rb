class CreateRefItems < ActiveRecord::Migration
  def change
    create_table :ref_items do |t|
    	t.integer	:item_id
    	t.integer	:refrigirator_id
    end
  end
end
