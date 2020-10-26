#!/bin/sh

# Setting up configuration
echo "LANG=en_US.utf-8" >> /etc/environment
echo "LC_ALL=en_US.utf-8" >> /etc/environmentz
echo "blacklist i2c_piix4" >> /etc/modprobe.d/modprobe.conf
echo "blacklist intel_rapl" >> /etc/modprobe.d/modprobe.conf
sed -i -e 's/installonly_limit=5/installonly_limit=2/' /etc/yum.conf
sed -i -e 's/GRUB_TIMEOUT=5/GRUB_TIMEOUT=0/' /etc/default/grub
sed -i -e 's/GRUB_DEFAULT=saved/GRUB_DEFAULT=0/' /etc/default/grub
grub2-mkconfig -o /boot/grub2/grub.cfg

# Delta
yum -y -q install deltarpm epel-release
# VBox
yum -y -q update
yum clean all

# Setting up configuration
localedef --list-archive | grep -v -i en_US | xargs localedef --delete-from-archive
mv /usr/lib/locale/locale-archive /usr/lib/locale/locale-archive.tmpl
build-locale-archive

# Restarting VM
shutdown -r now
