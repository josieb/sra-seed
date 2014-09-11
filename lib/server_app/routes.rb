#!/usr/bin/env ruby

require 'json'
require 'sinatra/base'

module ServerApp
  module Routes
    def self.registered(app)
      # @param [String] entity
      app.get '/api/entities/:entity' do
        entries = []
      
        Random.rand(5).times do
          entries << { :entry => (0...8).map {( 65 + rand(26) ).chr}.join }
        end
      
        return entries.to_json
      end
      
      # @param [Integer] max
      app.get '/api/numbers' do
        return Random.rand(10).times.map { Random.rand(params[:max] || 1000) }.to_json
      end
      
      app.get '//' do
        erb :index
      end
    end
  end
end
