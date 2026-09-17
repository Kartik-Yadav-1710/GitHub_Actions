# Pull a Base Image
FROM node:20 AS Builder

# Work directory to keep all codes
WORKDIR /app

# Copy the dependencies
COPY package.* .

# Build Stage
RUN npm intall

COPY . .
RUN npm run build

# Pulling a lighter image to run the application1
FROM nginx:alpine

WORKDIR /app

# Update Alpine packages to get security fixes
RUN apk update && apk upgrade

COPY --from=Builder /app/build  /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Run the Container
CMD ["nginx", "-g", "daemon off;"]