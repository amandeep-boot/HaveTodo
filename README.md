# HaveTodo

HaveTodo is a note-taking application built with React that allows users to Create, Read, Update, and Delete (CRUD) notes. This application uses Tailwind CSS for styling, JSON Server for the backend API, and Axios for HTTP requests.

## Features

- **Create**: Add new notes with a title and description.
- **Read**: View a list of all notes.
- **Update**: Edit existing notes.
- **Delete**: Remove notes.
- **Responsive**: Responsive design supporting vast category of devices.

## Technologies Used

- React
- Tailwind CSS
- JSON Server
- Axios
- UUID
- Bootstrap

## Getting Started

### Prerequisites

Make sure you have the following software installed:

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/havetodo.git
    cd havetodo
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Install JSON Server globally if you haven't already:

    ```bash
    npm install -g json-server
    ```

### Running the Application

1. Start JSON Server:

    ```bash
    npm run server
    ```

2. Start the React development server:

    ```bash
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000` to see the application in action.

### Folder Structure

havetodo/
├── public/
├── src/
│ ├── components/
│ │ ├── AddToDo.js
│ │ ├── Container.js
│ │ ├── Hero.js
│ │ ├── Navbar.js
│ │ ├── ToDoItem.js
│ │ ├── ToDoList.js
│ ├── App.css
│ ├── App.js
│ ├── index.css
│ ├── index.js
├── db.json
├── package.json
└── README.md


### Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in the development mode.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm test`: Launches the test runner in the interactive watch mode.
- `npm run eject`: Ejects the application, allowing for full customization.
- `npm run server`: Runs the JSON Server for backend API.

### JSON Server Configuration

The `db.json` file is used as the data source for JSON Server. Ensure that it contains initial data for your notes. Here's an example structure:

```json
{
  "todos": [
    { "id": "1", "text": "First Note", "completed": false },
    { "id": "2", "text": "Second Note", "completed": true }
  ]
}

