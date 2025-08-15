# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Build the app (if using Vite)
RUN npm run build

# Expose port 5173 (default Vite port)
EXPOSE 5173

# Start the app
CMD ["npm", "run", "preview"]
