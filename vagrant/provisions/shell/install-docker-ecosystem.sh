#!/bin/sh

# Install required tools
yum -y -q install yum-utils \
                  device-mapper-persistent-data \
                  lvm2 \
                  epel-release

# Add repo from "stable" tree
yum-config-manager --add-repo \
                   https://download.docker.com/linux/centos/docker-ce.repo

# Install the latest version of Docker CE and containerd
yum -y -q install  docker-ce docker-ce-cli containerd.io

# Checking Docker intallation
docker -v > /dev/null
exit_code=$?
if [ $exit_code -ne 0 ];
then
   echo "Error! Docker not installed properly!"
   exit $exit_code
else
   echo "Docker installed."
fi

# Add vagrant user
usermod -aG docker vagrant

# Install python-pip
yum -y -q install python-pip

# Checking python-pip intallation
pip --version > /dev/null
exit_code=$?
if [ $exit_code -ne 0 ];
then
   echo "Error! Python-pip not installed properly!"
   exit $exit_code
else
   echo "Python-pip installed."
fi

# Install Docker Compose
pip install -q docker-compose

# Checking Docker Compose intallation
docker-compose version > /dev/null
exit_code=$?
if [ $exit_code -ne 0 ];
then
   echo "Error! Docker Compose not installed properly!"
   exit $exit_code
else
   echo "Docker Compose installed."
fi

# Upgrade python packages
yum -y -q upgrade python*
