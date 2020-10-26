# -*- mode: ruby -*-
# vi: set ft=ruby :

# DUMMY FILE. NOT USE IT

# Path to vagrant prefences
curr_folder = File.dirname(__FILE__)
vagrant_folder = curr_folder + '/src/vagrant'
config_folder = vagrant_folder + '/config'
utils_folder = vagrant_folder + '/utils'
packer_folder = curr_folder + '/src/packer'

# Require files
require 'json'
require "#{utils_folder}/installPlugins.rb"

# Options
options = JSON.parse(File.read(config_folder + '/config.json'))
packer_options = JSON.parse(File.read(packer_folder + '/centos-7-latest.json'))

# Copy file
box_file =  curr_folder + '/test/' + File.basename(packer_options['post-processors'][0][0]['output'])

# Install plugins
installPlugins(options['BOX_PLUGINS'])

# Vagrant config
Vagrant.configure(options['API_VERSION']) do |config|

  # Box
  config.vm.box = packer_options['variables']['box']
  config.vm.box_url = 'file://' + box_file

  # machine name (for vagrant console)
  config.vm.define options['MACHINE_NAME']

  # machine name (for guest machine console)
  config.vm.hostname = options['MACHINE_NAME']

  # Disable sync folder '/vagrant'
  config.vm.synced_folder ".", "/vagrant",
    type: 'virtualbox',
    owner: 'vagrant',
    group: 'vagrant',
    disabled: true

  # VirtualBox
  config.vm.provider 'virtualbox' do |vb|
    # machine cpus count
    vb.cpus = options['VIRTUALBOX_PROVIDER']['cpus']
    # machine memory size
    vb.memory = options['VIRTUALBOX_PROVIDER']['memory']
    # machine name (for VirtualBox UI)
    vb.name = options['MACHINE_NAME']
    # linked clone
    vb.linked_clone = options['VIRTUALBOX_PROVIDER']['linked_clone']
  end

end
