import os

bind = '127.0.0.1:3000'
backlog = 2048
loglevel = os.environ.get('LOG_LEVEL', 'debug')
proc_name = None
workers = 1
worker_class = 'sync'
worker_connections = 1000
timeout = 30
keepalive = 2
spew = False
reload=True