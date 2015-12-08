class CreateRefrigerators < ActiveRecord::Migration
  def change
    create_table :refrigerators do |t|
    	t.string	:name
    	t.string	:address
    	t.timestamps
    end
  end
end
