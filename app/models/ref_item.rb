class RefItem < ActiveRecord::Base
  attr_accessible :item_id, :refrigirator_id
  belongs_to :items 
  belongs_to :refrigirators
end
