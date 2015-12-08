class Company < ActiveRecord::Base
  attr_accessible :name, :owner
  has_many :items
end
