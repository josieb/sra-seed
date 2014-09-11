#!/usr/bin/env ruby

$LOAD_PATH << File.expand_path( File.dirname(__FILE__) )

require 'eventmachine'
require 'thin'
require 'sinatra/base'
require 'server_app/routes'

module ServerApp

  class Base < Sinatra::Base
    register ServerApp::Routes

    configure do
      set :root, File.expand_path( File.join( File.dirname(__FILE__), '..', 'web' ) )
      set :threaded, false
    end
  end

  def self.run(options)
    EventMachine.run do
      server = options[:server] || 'thin'
      raise 'Need an EM webserver, but #{server} isn\'t' unless ['thin', 'hatetepe', 'goliath'].include? server
  
      host = options[:host] || '0.0.0.0'
      port = options[:port] || '8181'
      web_app = options[:app]
  
      dispatch = Rack::Builder.app do
        map '/' do
          run web_app
        end
      end
  
      Rack::Server.start({
        :app => dispatch,
        :server => server,
        :Host => host,
        :Port => port
      })
    end
  end

end


ServerApp.run(:app => ServerApp::Base.new)
