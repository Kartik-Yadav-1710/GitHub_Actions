# Pull a Base Image
FROM node:latest AS Builder

# Work directory to keep all codes
WORKDIR /app

# Copy the dependencies
COPY package.* .

# Build Stage
RUN npm install

COPY . .
RUN npm run build

# Pulling a lighter image to run the application
FROM nginx:alpine

WORKDIR /app

COPY --from=Builder /app/build  /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Run the Container
CMD ["nginx", "-g", "daemon off;"]

