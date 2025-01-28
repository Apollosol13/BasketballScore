# Build stage
FROM node:20-alpine as build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Serve stage
FROM node:20-alpine as production

WORKDIR /app

# Install serve globally
RUN npm install -g serve

# Copy built assets from build stage
COPY --from=build /app/dist ./dist

# Expose port 8383
EXPOSE 8383

# Start the server
CMD ["serve", "-s", "dist", "-l", "8383"] 