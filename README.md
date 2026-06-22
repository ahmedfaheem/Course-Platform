# 📚 Course Platform

A modern, responsive course browsing and management platform built with **React 19** and **Vite**. Users can explore available courses, view detailed course information, add new courses, and navigate a clean multi-page interface.

---

## 🚀 Features

- 🏠 **Home Page** – Hero section with a welcoming landing view
- 📖 **Courses Listing** – Browse all available courses
- 🔍 **Course Details** – View in-depth information about a specific course
- ➕ **Add Course** – Submit a new course via a form (powered by React Hook Form)
- ℹ️ **About Page** – Learn more about the platform
- 📬 **Contact Page** – Get in touch
- 🔀 **Client-side Routing** – Seamless navigation with React Router DOM v7
- 🐳 **Docker Support** – Run the app in a containerized environment

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19.x | UI library |
| Vite | 8.x | Build tool & dev server |
| React Router DOM | 7.x | Client-side routing |
| Bootstrap | 5.x | UI component styling |
| React Bootstrap | 2.x | Bootstrap React components |
| React Hook Form | 7.x | Form management & validation |
| Axios | 1.x | HTTP requests |

---

## 📁 Project Structure

```
Course-Platform/
├── public/               # Static assets
├── src/
│   ├── Pages/
│   │   ├── Home/         # Home page
│   │   ├── Courses/      # Courses list & Add course form
│   │   ├── CourseDetails/# Single course detail view
│   │   ├── About/        # About page
│   │   ├── Contact/      # Contact page
│   │   ├── NotFound/     # 404 error page
│   │   └── Layout.jsx    # Shared page layout wrapper
│   ├── componenets/
│   │   ├── Courses/      # Courses layout & shared course components
│   │   ├── NavBar/       # Navigation bar
│   │   ├── Hero/         # Hero section
│   │   └── Footer/       # Footer
│   ├── App.jsx           # Root component & route definitions
│   ├── main.jsx          # App entry point
│   ├── App.css           # App-level styles
│   └── index.css         # Global styles
├── Dockerfile            # Docker configuration
├── vite.config.js        # Vite configuration
├── eslint.config.js      # ESLint configuration
└── package.json          # Project dependencies & scripts
```

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js** v18+ (recommended: v22)
- **npm** v9+

### Installation

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd Course-Platform

# 2. Install dependencies
npm install
```

### Running the Development Server

```bash
npm run dev
```

The app will be available at **[http://localhost:3000](http://localhost:3000)**

---

## 📜 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the Vite development server on port 3000 |
| `npm run build` | Build the app for production into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check for code issues |

---

## 🐳 Docker

Build and run the app using Docker:

```bash
# Build the Docker image
docker build -t course-platform .

# Run the container
docker run -p 3000:3000 course-platform
```

The app will be available at **[http://localhost:3000](http://localhost:3000)**

---

## 🗺️ Routes

| Path | Component | Description |
|---|---|---|
| `/` | `Home` | Landing / home page |
| `/courses` | `Courses` | List of all courses |
| `/courses/:id` | `CourseDetails` | Details for a specific course |
| `/courses/add` | `AddCourse` | Form to add a new course |
| `/about` | `About` | About the platform |
| `/contact` | `Contact` | Contact information |
| `*` | `NotFound` | 404 – Page not found |

---

## 📄 License

This project is for educational purposes as part of the **ITI React Training Program**.
