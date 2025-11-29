FROM nginx:alpine

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built static files from Astro (assumes dist/ exists locally)
COPY dist /usr/share/nginx/html/kivansaglista

# Create empty index page for root
RUN echo "" > /usr/share/nginx/html/index.html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

