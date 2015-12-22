class RefItem < ActiveRecord::Base
  attr_accessible :item_id, :refrigerator_id
  belongs_to :item
  belongs_to :refrigerator
end