class Refrigirator < ActiveRecord::Base
  attr_accessible :name, :address
  has_many :ref_items
  has_many :items
  has_many :items, :through => :ref_items
end
