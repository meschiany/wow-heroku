class MainController < ApplicationController
  
	def index
		render :text => "Chill out", :status => :ok, :content_type => 'text/html'
	end

	def show
		render :text => "Chill out #{params[:id]} :)", :status => :ok, :content_type => 'text/html'		
	end


	def create_ref
		refrigirator = Refrigirator.create(name: params[:name], address: params[:address])
		ref_id = refrigirator[id]
		link_items(ref_id)
	end

	def link_items(ref_id)
		params[:item_id].each { |item_id| 
			RefItem.create(refrigirator_id: ref_id, item_id: item_id)
		}
	end

	def get_ref
		@ref = Refrigirator.find_by(id: params[:id])
	end

	def get_item_by_id
		@item = Item.find_by(id: params[:id])
	end



end
