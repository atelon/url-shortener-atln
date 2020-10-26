#!/bin/bash -x

# Install VBoxGuestAdditions
mount -o loop /home/vagrant/VBoxGuestAdditions.iso /mnt
sh /mnt/VBoxLinuxAdditions.run
rc=$?

umount /mnt
rm -rf /home/vagrant/VBoxGuestAdditions.iso

if [ $rc -ne 0 ]
then
    exit $rc
else
    echo "Virtualbox guest addons have been installed successfully"
    exit 0
fi
