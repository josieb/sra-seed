#!/usr/bin/env ruby

require 'json'
require 'sinatra/base'

module ServerApp
  module Routes
    def self.registered(app)
      # @options [Hash] params
      # @options params [String] :entity
      app.get '/api/entities/:entity' do
        content_type 'application/json'

        entries = []
      
        Random.rand(5).times do
          entries << { :entry => (0...8).map {( 65 + rand(26) ).chr}.join }
        end
      
        return entries.to_json
      end
      
      # @options [Hash] params
      # @options params [String] :max
      app.get '/api/numbers' do
        content_type 'application/json'

        return Random.rand(10).times.map { Random.rand(params[:max] || 1000) }.to_json
      end
      
      app.get %r{/app/([\w]+)} do
        content_type 'text/html'

        erb :index
      end
    end
  end
end
