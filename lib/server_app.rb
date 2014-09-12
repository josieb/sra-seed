#!/usr/bin/env ruby

$LOAD_PATH << File.expand_path( File.dirname(__FILE__) )

require 'sinatra/base'
require 'server_app/routes'

module ServerApp
  class Base < Sinatra::Base
    register ServerApp::Routes

    configure do
      set :root, File.join( File.dirname(__FILE__), '..', 'web' )
      set :threaded, true

      set :public_folder, File.join(settings.root, 'assets')
    end
  end
end
