----------------------------- Todo Application -------------------------------

This is a simple React-based Todo List application that includes user authentication and persistent todo management using local storage. The app allows users to register, log in, and manage their todo tasks with the ability to add, edit, delete, and mark tasks as complete or incomplete. Todos are saved locally and persist across page reloads.

Features -->
User Registration and Login (Managed with React Context and local state)
Add, Edit, Delete, and Mark Todos as Complete/Incomplete
Todos are saved to localStorage, ensuring persistence across sessions
Form validation using Formik and Yup
Responsive design using Material UI
Clean and simple UI

Prerequisites -->
    Make sure you have the following installed
        Node.js (v14.x or later)
        npm or yarn (Node.js package manager)

---Installation---
    Clone the repository to your computer -->
        git clone https://github.com/RCG-Coding/todo-app.git

    Navigate to the project folder -->
        cd todo-app

    Install the required dependencies
        If you're using npm: npm install
        if you're using yarn: yarn install

---Running the Application---
    Run the application with npm: npm start
    Run the application with yarn: yarn start

    Open your browser and navigate to: http://localhost:3000

---Usage---
    Register: Create an account by entering your email, password, and name.
    Login: Use your registered credentials to log in.
    Todo List Management: Once logged in, you can:
        Add todos with a title and description.
        Edit existing todos.
        Delete todos.
        Toggle completion status (mark as complete/incomplete).
    Persistent Todos: The todo list is saved in local storage, ensuring that  your tasks remain available even after refreshing the page.

---Project Structure---

    /src
     /components
        - Home.js         // Home component
        - Login.js        // Login form component
        - Register.js     // Registration form component
        - TodoList.js     // Main todo list logic (CRUD operation,persistence)
     /Context
        - AuthContext.js  // Handles authentication state
     - App.js            // Main application component that handles routing
     - index.js          // Entry point of the app

---Technologies Used---
    React: JavaScript library for building user interfaces
    Material UI: A popular React UI framework for responsive, modern design
    Formik: For managing form state
    Yup: For form validation schema
    React Router: For navigation between login/register and todo pages
    LocalStorage: For saving todos and authentication state in the browser    
    

