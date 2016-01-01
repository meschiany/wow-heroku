class MainController < ApplicationController
  require 'json'
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

	def index_mobile
		@title="ריכוזיות בשוק המזון-וואו איזה אבסורט"
	end


	def create_ref
		refrigerator = Refrigerator.create(name: params[:name], address: params[:address])
		ref_id = refrigerator.id
		link_items(ref_id)
	end

	def link_items(ref_id)
		params[:item_id].each do |item_id| 
			RefItem.create(refrigerator_id: ref_id, item_id: item_id)
		end
	end

	def get_ref
		@ref = Refrigerator.find(params[:id])
	end

	def get_item_by_id
		@item = Item.find(params[:id])
	end

	def create_data_for_sunburst_by_ref_id
		txt=""
		items = RefItem.where(refrigerator_id: params[:id])
		items.each.with_index(1) do |item,i|
			txt = txt + "#{i}, 1, #{item.item.company.owner}, 0"
			txt = txt + "#{i}, 2, #{item.item.company.name}, 0"
			txt = txt + "#{i}, 3, #{item.item.name}, #{item.item.price}"
		end
		render :text => txt , :status => :ok, :content_type => 'text/html'
	end

	def create_items_json_by_ref_id
		items = RefItem.where(refrigerator_id: params[:id])
		jsonobj = {:respons => "true"}
		jsonobj = {:data => []}
		items.each do |item|
			jsonobj[:data].push({:name => item.name , :price => item.price, :company_name => item.company.name})
		end
		render:json => jsonobj, :status => :ok, :content_type => 'text/html'
	end

	def search_items
		@items = Item.where("name like ?", "%#{params[:word]}%")
		render:json => @items, :status => :ok, :content_type => 'text/html'
	end


end
