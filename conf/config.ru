#!/usr/bin/env ruby

$LOAD_PATH << File.expand_path( File.join( File.dirname(__FILE__), '..', 'lib' ) )

require 'rack'
require 'server_app'

app = Rack::Builder.app do
  map '/' do
    run ServerApp::Base.new
  end
end

run app
