# log-and-querying-system
This repository hosts a full-stack application that simulates a real-world developer tool used for monitoring and debugging applications.

## Overview
This is a full-stack project built with:
**Frontend**: React and Tailwind CSS  (inside frontend dir)
**Backend**: Node.js and Express (inside backend dir)

## Project Setup
Follow the steps below to run the project locally.

### 🔄 Clone the Repository
```bash
git clone https://github.com/Edipika/log-and-querying-system.git
cd log-and-querying-system  
```
### Running the Backend
Navigate to backend directory :```cd backend``` 
Install dependencies:```npm install```
Start the backend server:```node index.js```
the backend runs on ```http://localhost:5000```

### Running the Frontend
Navigate to the frontend directory: ```cd frontend```
Install dependencies : ```npm install```
Start the development server: ```npm run dev```
The frontend should now be running on ``` http://localhost:5173```


### Frontend Structure & Code Organization
Located in the frontend/ directory.

Key Folders and Files:
components/
Contains all reusable and page-specific components:

AddLog.jsx – used to add new log entries.
Filters.jsx – provides filter options for logs.
Logs.jsx – handles rendering the list of logs.
Search.jsx – includes the search input for filtering logs.
Table.jsx – shows logs in a table format.

src/context/
Manages global application state using the Context API:

LogContext.jsx is used to manage global state for logs (like log data, filters, etc.) and share it across components without prop drilling. 

### Backend Structure & Code Organization
Located in the backend/ directory.

Key folders and files:
controllers/
logControllers.js:  Contains logic for handling requests such as adding, fetching and filtering logs etc. Keeps route files clean and organized.

routes/
logRoutes.js: Defines all API endpoints related to logs. These routes call corresponding functions from the controller.

data/
logs.json: This file contains a single JSON file as its database. and fs modules is used to perform create, read, write operation

index.js
This is the entry point of the backend server. It sets up the Express app, applies middleware cors is used to ensure communication between 2 different port


This structure is intentionally minimal:
Routes and controllers are separated to make it easier to scale and test.

A flat logs.json file is used instead of a database for simplicity during development or assessment.

No external frameworks like Nest.js were used to keep the setup lightweight and easy to understand. 

