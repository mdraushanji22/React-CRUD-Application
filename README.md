
 # React CRUD Application

 A simple React CRUD (Create, Read, Update, Delete) application for managing a list of users.
 Users have basic fields: **ID**, **name**, **email**, and **phone**.
 Data is served from a JSON API using **json-server**.

 ---

 ## Features

 - **List users** with ID, name, email, phone
 - **Create** a new user
 - **Read** user details
 - **Update** existing users
 - **Delete** users
 - **Auto-incrementing** user IDs
 - **Responsive UI** for mobile, tablet, and desktop

 ---

 ## Prerequisites

 - Node.js (LTS recommended)
 - npm or yarn

 ---

 ## Installation

 ```bash
 # install dependencies
 npm install
 # or
 yarn install
 ```

 ---

 ## Running the JSON API (json-server)

 From the project root:

 ```bash
 npx json-server --watch src/db.json --port 3000
 ```

 This will start the API at:

 - `http://localhost:3000/users`

 ---

 ## Running the React App

 In another terminal, from the project root:

 ```bash
 npm run dev
 # or
 yarn dev
 ```

 Then open the URL shown in the terminal (usually `http://localhost:5173` for Vite).

 ---

 ## Usage

 1. **User List** – Shows all users with options to *Read*, *Update*, and *Delete*.
 2. **Add User** – Click **"Add User +"**, fill in the form, and submit.
 3. **Read User** – Click **"Read"** to see user details.
 4. **Update User** – Click **"Edit"**, change name/email/phone, and save.
 5. **Delete User** – Click **"Delete"** and confirm to remove a user.

