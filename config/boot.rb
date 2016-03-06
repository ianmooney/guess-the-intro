ENV['BUNDLE_GEMFILE'] ||= File.expand_path('../../Gemfile', __FILE__)

require 'bundler/setup' # Set up gems listed in the Gemfile.

# Load env variables from config/env.yml
require 'yaml'
env_yml = File.expand_path('../env.yml', __FILE__)
if File.exists?(env_yml)
  YAML.load_file(env_yml).each do |key,value|
    ENV[key.to_s] = value
  end
end
