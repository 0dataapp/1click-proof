#!/bin/bash

# ensure that this file executable in the app repo: chmod +x cloudron-start.sh.

mkdir -p /app/data/__local
chown -R cloudron:cloudron /app/data/__local/

exec /usr/local/bin/gosu cloudron:cloudron npm start
