FROM nginx:alpine

# Copy custom NGINX config
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy frontend HTML into public web root
COPY frontend/index.html /usr/share/nginx/html/
