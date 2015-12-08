class Item < ActiveRecord::Base
  attr_accessible :name, :company_id, :price
  belongs_to :company
  has_many :ref_items
  has_many :refrigirators, :through => :ref_items
end
