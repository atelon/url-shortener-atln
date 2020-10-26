#!/bin/sh

#yum --enablerepo=base clean metadata

# VBox
yum -y -q install perl gcc dkms kernel-devel kernel-headers make bzip2 tree
