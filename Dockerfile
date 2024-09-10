# Use the official Nginx image as the base image
FROM nginx:alpine

# Copy custom Nginx config file to the Nginx configuration directory
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the static website files to the Nginx html directory
COPY public /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]