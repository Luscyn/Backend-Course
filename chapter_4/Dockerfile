# Use an official node.js runtime as a parent image
FROM node:22-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and the package-lock.json files to the container

COPY package*.json .

# Install the dependencies
RUN npm install


RUN npx prisma generate

# Copy the rest of the application code
COPY . .

# Expose the port that the app runs on
EXPOSE 5001

# Define the command
CMD ["node", "./src/server.js"]