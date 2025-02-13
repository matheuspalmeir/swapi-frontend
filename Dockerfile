# Using Node.js image 20
FROM node:20

# Defining the working directory
WORKDIR /app

#Copying the package files to the container
COPY package.json package-lock.json ./
RUN npm install

# Copying the rest of the application files
COPY . .

# Running the application build
RUN npm run build

# Exposing on port 3000
EXPOSE 3000

# Running the application
CMD ["npm", "run", "dev"]
