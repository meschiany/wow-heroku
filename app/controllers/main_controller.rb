class MainController < ApplicationController
  
	# def index
	# 	render :text => "Chill out", :status => :ok, :content_type => 'text/html'
	# end

	# def show
	# 	render :text => "Chill out #{params[:id]} :)", :status => :ok, :content_type => 'text/html'		
	# end

	def company
		if(params.has_key?(:name))
			company = Company.where(name: params[:name]).first
			render :text => "Company #{params[:name]} is owned by: " + company.owner + " and the owner is: ", :status => :ok, :content_type => 'text/html'
		elsif(params.has_key?(:id))
			company = Company.find(params[:id])
			render :text => "Company in id #{params[:id]} is: " + company.name + " and the owner is: " + company.owner , :status => :ok, :content_type => 'text/html'
		end
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
