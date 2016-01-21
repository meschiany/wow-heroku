class MainController < ApplicationController
  require 'json'

	def company
		if(params.has_key?(:name))
			company = Company.where(name: params[:name]).first
			render :text => "Company #{params[:name]} is owned by: " + company.owner + " and the owner is: ", :status => :ok, :content_type => 'text/html'
		elsif(params.has_key?(:id))
			company = Company.find(params[:id])
			render :text => "Company in id #{params[:id]} is: " + company.name + " and the owner is: " + company.owner , :status => :ok, :content_type => 'text/html'
		end
	end

	def index
		@items =Item.all.map {|record| record.name}
		@companies = Company.all
		@family = RefItem.where(refrigerator_id: 1).map{|r| r.item}
		@single = RefItem.where(refrigerator_id: 2).map{|r| r.item}
		@couple = RefItem.where(refrigerator_id: 3).map{|r| r.item}
	end

	def save_img
		data_url = params[:imgBase64]
		puts data_url
		name = params[:name]
		png = Base64.decode64(data_url['data:image/png;base64,'.length .. -1])
		File.open(Rails.root.join('app/assets/uploads/'+name+'.png'), 'wb') { |f| f.write(png) }
		head :ok
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
		ary = Array.new 
		params[:word].each do |item|
			myItem = Item.where("name like ?", "%#{item}%")
  			ary.push(myItem)
		end
		puts ary
		render:json => ary, :status => :ok, :content_type => 'text/html'
	end

end