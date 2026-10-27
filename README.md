# My TODO List (React + Vite)

A simple, lightweight TODO Application built with **React**, **Vite**, and **JavaScript** for a college assignment.

---

## 1. Features
This application contains strictly the core features:
1. **Add Task:** Enter a task name in the text box and click the **Add** button (or press Enter). Empty or whitespace-only tasks cannot be added.
2. **Complete Task:** Click the checkbox next to any task to toggle its completion state. Completed tasks are displayed with a strikethrough.
3. **Delete Task:** Click the **Delete** button beside any task to remove it from the list.

---

## 2. Project File Structure
```text
todo-app/
├── index.html          # HTML entry file that mounts the React app
├── package.json        # Project metadata, dependencies, and scripts
├── vite.config.js      # Vite build configuration (base path configured for GitHub Pages)
├── .gitignore          # Specifies files and directories to ignore in Git (e.g. node_modules, dist)
├── src/
│   ├── main.jsx        # JavaScript entry point that initializes React root
│   ├── App.jsx         # Main React component containing state and logic
│   └── App.css         # CSS styles for layout, buttons, and strikethrough
└── README.md           # Documentation, setup guide, and viva questions
```

---

## 3. Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- Git installed on your system

### Steps to Run
1. Open your terminal / command prompt and navigate to the project directory:
   ```bash
   cd todo-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the local development server:
   ```bash
   npm run dev
   ```
4. Open the displayed URL (typically `http://localhost:5173`) in your browser to view the application.

---

## 4. Building for Production

To test and create an optimized production build:
```bash
npm run build
```
This generates the bundled output inside the `dist/` directory.

To preview the production build locally:
```bash
npm run preview
```

---

## 5. Publishing to GitHub and Deploying to GitHub Pages

### Step A: Initialize Git and Push to GitHub
1. Initialize a git repository in the project folder (if not done already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: simple React TODO app"
   ```
2. Create a new repository on [GitHub](https://github.com/new) (e.g., named `todo-app`).
   - Do **not** initialize it with a README, `.gitignore`, or license.
3. Link your local project to GitHub and push (replace `<your-username>` with your GitHub username):
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/todo-app.git
   git push -u origin main
   ```

### Step B: Deploy to GitHub Pages
The project is pre-configured with the `gh-pages` package and relative asset paths (`base: './'` in `vite.config.js`).

1. Run the deployment command in your terminal:
   ```bash
   npm run deploy
   ```
   *Note: This command automatically builds the project (`predeploy`) and pushes the `dist` folder to a `gh-pages` branch on GitHub.*

2. Configure GitHub Pages in your repository settings:
   - Go to your repository on GitHub.
   - Click **Settings** > **Pages** (in the left sidebar).
   - Under **Build and deployment**:
     - **Source**: Select `Deploy from a branch`.
     - **Branch**: Choose `gh-pages` and folder `/ (root)`.
     - Click **Save**.
3. After 1–2 minutes, your live website will be available at:
   ```
   https://<your-username>.github.io/todo-app/
   ```

---

## 6. How to Test the Features

1. **Test Add Task:**
   - Type "Study for exam" in the input field and click **Add** (or press Enter). The task appears in the list.
   - Try clicking **Add** with an empty input or only spaces — nothing will be added.
2. **Test Complete Task:**
   - Click the checkbox beside "Study for exam".
   - The task text should immediately show a strikethrough.
   - Click the checkbox again — the strikethrough is removed.
3. **Test Delete Task:**
   - Click the **Delete** button next to a task.
   - The task is immediately removed from the list.

---

## 7. College Practical Exam / Viva Questions & Answers

### Q1: What is React and why did you use functional components?
**Answer:** React is an open-source JavaScript library for building user interfaces based on reusable components. We used functional components because they are modern, simpler to write and read, and allow using React Hooks like `useState`.

### Q2: What is the purpose of `useState` in this application?
**Answer:** `useState` is a React Hook that lets functional components maintain state (data that can change over time). When state changes, React re-renders the component to update the UI. We used two states:
- `tasks`: An array holding all task objects (`{ id, text, completed }`).
- `taskInput`: A string tracking whatever the user currently types in the input field.

### Q3: How does the "Complete Task" strikethrough work?
**Answer:** In `App.jsx`, each task has a boolean property `completed`. When the checkbox is clicked, `handleToggleComplete` toggles this boolean. In JSX, we conditionally apply the CSS class `completed` (`task.completed ? 'task-text completed' : 'task-text'`). In `App.css`, `.completed` applies `text-decoration: line-through`.

### Q4: How does the "Delete Task" feature work?
**Answer:** `handleDeleteTask` takes the task's unique `id` and uses JavaScript's array `.filter()` method to create a new array excluding that specific task (`tasks.filter(task => task.id !== taskId)`). Then `setTasks` updates the state with the filtered array.

### Q5: Why is Vite used instead of Create React App?
**Answer:** Vite is a modern frontend build tool that is significantly faster than Create React App. It offers instant server start and lightning-fast Hot Module Replacement (HMR) using native ES modules.
