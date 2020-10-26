#!/bin/sh

# Remove unnecessary components
systemctl stop postfix && systemctl disable postfix
yum -y -q remove postfix
systemctl stop chronyd && systemctl disable chronyd
yum -y -q remove chrony
systemctl stop avahi-daemon.socket avahi-daemon.service
systemctl disable avahi-daemon.socket avahi-daemon.service
yum -y -q remove avahi-autoipd avahi-libs avahi dkms kernel-devel kernel-headers

# clean up
dd if=/dev/zero of=/EMPTY bs=1M
rm -f /EMPTY
sync
package-cleanup -y -q --oldkernels --count=1
yum -y -q autoremove
yum -y -q remove yum-utils
yum clean all
rm -rf /tmp/*
rm -f /var/log/VBoxGuestAdditions.log
rm -f /var/log/vboxadd-install.log
rm -f /var/log/wtmp /var/log/btmp
rm -rf /var/cache/* /usr/share/doc/*
rm -rf /var/cache/yum
rm -rf /run/log/journal/*
cat /dev/null > ~/.bash_history && history -c
