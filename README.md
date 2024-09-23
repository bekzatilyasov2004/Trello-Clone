# Trello Clone

A Trello-inspired task management application built using **React**, **Zustand** for state management, and **Chakra UI** for UI components. This application allows users to create lists, add tasks, update, and delete them, with data persistence through **local storage**.

## Features

- **Create lists**: Users can add new lists with custom titles.
- **Add tasks**: Users can add tasks (cards) to each list with a timestamp.
- **Edit tasks**: Tasks can be edited inline, with changes saved automatically.
- **Delete lists and tasks**: Full control over deleting lists and individual tasks.
- **Persistent storage**: The application stores all data in local storage to persist state across sessions.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Zustand**: A small, fast, and scalable state-management solution for React.
- **Chakra UI**: A simple, modular, and accessible component library for building React applications.
- **Local Storage**: Used to persist data locally in the browser.

## Installation

1. Clone this repository to your local machine.

   ```bash
   git clone https://github.com/bekzatilyasov2004/   Trello-Clone.git
   ```

2. Navigate to the project directory.

   ```bash
   cd trello-clone
   ```

3. Install the required dependencies.
    
    ```bash
    npm install
    ```

4. Start the development server.

    ```bash
    npm run dev
    ```

# Future Improvements
* User Authentication: Allow users to log in and store lists/tasks based on their profile.
* Backend Integration: Persist tasks and lists on a server to support multiple devices.
* Drag-and-Drop Functionality: Add drag-and-drop to rearrange tasks within and across lists.
* Subtasks: Add support for creating subtasks under each card.

# Technologies Used
* React: A JavaScript library for building user interfaces.
* Zustand: A lightweight state-management library for React.
* Chakra UI: A component library for building modern UIs.
* Local Storage: Used to persist data in the browser across page reloads.