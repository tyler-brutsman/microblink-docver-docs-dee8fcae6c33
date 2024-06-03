#!/bin/sh

# IMPORTANT: FILE ENDINGS MUST BE LF ONLY

VARS='$NG_SERVER_NAME:$NG_LISTEN'

# Apply environment variables to nginx.conf - and produce real conf
envsubst $VARS < /opt/init/nginx.conf.template > /etc/nginx/nginx.conf
# Apply environment variables to app config
#envsubst $VARS < /opt/init/config.js.template > /var/www/assets/config/production.js
# Start nginx
nginx -g 'daemon off;'