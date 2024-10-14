# Use an official Node runtime as the base image
FROM node:18

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install --legacy-peer-deps

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 4200 for the development server
EXPOSE 4200

# Set NODE_OPTIONS environment variable
ENV NODE_OPTIONS=--openssl-legacy-provider

# Start the application
CMD ["ng", "serve", "--host", "0.0.0.0"]