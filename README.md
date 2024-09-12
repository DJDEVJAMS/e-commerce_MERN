# Pro-Getter

## Description

Pro-Getter is a web application designed to connect customers with contractors and vice-versa. Customers can create profiles that showcase the types of jobs they have and other relevant details. Contractors can search for jobs based on the type of work there is a need for and also look up specific jobs. The app features a login system where users can register either as a customer or a contractor.

## Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [License](#license)
- [Contact](#contact)

## Technologies Used

- **Frontend**: React, Apollo Client, GraphQL
- **Backend**: Node.js, Express.js, Apollo Server
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: CSS
- **Deployment**: Render https://e-commerce-mern-5-g52a.onrender.com

## Features

- **Login and Signup**: Users can sign up or log in as either a customer or contractor.
- **Search Functionality**: Customers can search for contractors based on the type of work they need.
- **Contractor Profiles**: Contractors can create and manage their profiles, showcasing their work and rates.
- **Responsive Design**: The application is mobile-friendly and adapts to various screen sizes.
- **Authentication**: JWT-based authentication ensures secure user logins and protects sensitive data.

## Installation


Installation
CLone the repository: git clone git@github.com:DJDEVJAMS/e-commerce_MERN.git 

Open VS Code. If you do not have VS Code you must install it.

Using the terminal, install node.js.

Once node.js is installed, in the terminal, utilize the command npm i to install all the packages needed for this application.

Create a .env file within the root directory of the repository, within which you will pass your enviornmental variables specifying the database name, you PostgreSQL username and password. This will need to be completed before running the application, and will allow the connection.js file to utilize your environmental variables keeping your sensitive information protected.

If you do not have a PostgreSQL account, you will need to create one (see https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/).

Once all dependancies are installed, you will need to create the database. To do thus you will need to naviget to the directory of the database by right clicking on schema.sql in the db folder and opening an integrated termainal. Once there you can type in psql -U postgres, then follow the prompts and enter your password. Then you will need to type in \i schema.sql to create the database.

Next you will need to seed that database. To do this you will need to open a new integrated terminal by right clicking on server.js (in the root of the directory) and opening an integrated terminal. There you will type in npm seed.

Once the database has been seeded, you will then be able to run the command npm start from the integrated file in the root of the repository to spin up the server. With nodemon installed, you will also be able to utilize the command npm run watch, to keep the server spun up between code edits.

From there, you can utilize applications such as Insomnia to test the functionality of the routes within the program and make edits to both the front-end and back-end of the code base.

Usage
Signup/Login:

Users can sign up as either a customer or a contractor.
Once logged in, customers can search for contractors by work type, and contractors can manage their profiles.
Customer Features:

Search for contractors based on the type of work needed.
View contractor profiles and see their rates and contact information.
Contractor Features:

Manage your profile with details about the services you provide and your rates.
View job requests from customers.
![CRUD](https://github.com/user-attachments/assets/4018c668-e10a-423b-91e5-ebecfd1f3b79)
![sign up](https://github.com/user-attachments/assets/742d2ad1-a2d7-427a-b892-6b98c4e310d3)
![new main ](https://github.com/user-attachments/assets/60e26632-bc56-4375-bea2-0fe39ef2ef33)
![dashboard](https://github.com/user-attachments/assets/c91c9829-e577-4898-bb2f-d91928d2babe)
![Contractor page](https://github.com/user-attachments/assets/517ac352-53cd-4691-9418-dbf4fcf6bc54)



   
License
This project is licensed under the MIT License. See the LICENSE file for details

Contact: 
Alex Diaz https://github.com/aadiaz10
Alex Brown   https://github.com/DJDEVJAMS
Jack Rozovsky  https://github.com/JackRozov
