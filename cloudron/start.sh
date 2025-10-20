#!/bin/bash

# ensure that this file executable in the app repo: chmod +x start.sh.

chown -R cloudron:cloudron /app/data

mkdir -p /app/data/__local

exec /usr/local/bin/gosu cloudron:cloudron npm start
