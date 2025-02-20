User Management App

This is a simple user management web application built using Node.js, Express, MongoDB, and EJS for templating. Tailwind CSS is used for styling the frontend.

Features

Create a new user with a name, email, and image URL.

Read and display all users from the database.

Update user details.

Delete users.

Technologies Used

Backend: Node.js, Express.js, MongoDB (Mongoose)

Frontend: EJS, Tailwind CSS

Installation

Clone the repository:

git clone https://github.com/your-repo/user-management.git
cd user-management

Install dependencies:

npm install

Start the MongoDB server (ensure MongoDB is installed and running on your system):

mongod

Run the application:

node index.js

The application will start on http://localhost:4000.

Endpoints

GET / - Home page with the form to create a user.

GET /read - Displays all users.

POST /create - Creates a new user.

GET /edit/:userid - Displays edit form for a specific user.

POST /update/:userid - Updates a user.

GET /delete/:id - Deletes a user.

Folder Structure

user-management/
│── models/
│   ├── user.js         # Mongoose model for User
│── public/
│   ├── stylesheets/
│       ├── style.css   # Custom styles
│── views/
│   ├── index.ejs       # Home page
│   ├── read.ejs        # Displays users
│   ├── edit.ejs        # Edit user form
│── index.js            # Main server file
│── package.json        # Dependencies & scripts

Dependencies

express

mongoose

ejs

body-parser

License

This project is open-source and available under the MIT License.
