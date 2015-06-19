#!/bin/bash

set -e

CWD="`dirname \"$0\"`"
CWD="`( cd \"$CWD/..\" && pwd )`"

pushd $CWD > /dev/null

export APP_HOME=`pwd`
export APP_PORT=$UI_PORT
erb nginx.conf.erb > nginx.conf

case $1 in
  start )
    if [ ! -e nginx.conf ]; then
      echo "no nginx.conf found"
      exit 1
    fi
    echo Starting UI
    if [ "$NGINX_REQUIRES_SUDO" = "" ]; then
      nginx -p `pwd` -c nginx.conf
    else
      sudo nginx -p `pwd` -c nginx.conf
    fi
    ;;
  stop )
    echo Stopping UI
    if [ "$NGINX_REQUIRES_SUDO" = "" ]; then
      nginx -s stop -p `pwd` -c nginx.conf
    else
      sudo nginx -s stop -p `pwd` -c nginx.conf
    fi
    ;;
esac

