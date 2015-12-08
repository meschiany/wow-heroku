class MainController < ApplicationController
  
	def index
		render :text => "Chill out, someone already activated this APV :)", :status => :ok, :content_type => 'text/html'
	end
	def show

		render :text => "Chill out, someone already activated this #{params[:id]} :)", :status => :ok, :content_type => 'text/html'		
	end

end
