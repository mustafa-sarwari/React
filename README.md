# Employee Management System

A modern, responsive employee management application built with React that allows you to manage employee information with an intuitive user interface.

## About the Project

This is a full-featured employee management system that provides a clean and user-friendly interface for managing employee data. The application displays employee cards with their information and allows for easy addition and editing of employee records through modal dialogs.

## Features

- **Employee Directory**: Display all employees in a responsive card-based layout
- **Add New Employees**: Add new employees with name, role, and image information
- **Edit Employee Information**: Update existing employee details through an intuitive modal interface
- **Responsive Design**: Fully responsive UI that works on desktop, tablet, and mobile devices
- **Modern Navigation**: Clean navigation bar with dropdown menus
- **Route Management**: Single-page application with React Router for smooth navigation

## Technologies Used

### Languages
- **JavaScript (ES6+)**: Primary programming language
- **HTML5**: Structure and markup
- **CSS3**: Styling and layout

### Libraries and Frameworks
- **React (v19.2.0)**: Frontend library for building user interfaces
- **React DOM (v19.2.0)**: React rendering for web applications
- **React Router DOM (v7.9.6)**: Routing and navigation
- **Tailwind CSS (v3.4.18)**: Utility-first CSS framework for styling
- **Bootstrap (v5.3.8)**: CSS framework for responsive design
- **React Bootstrap (v2.10.10)**: Bootstrap components built with React

### UI Components
- **Headless UI (v2.2.9)**: Unstyled, accessible UI components
- **Heroicons (v2.2.0)**: Beautiful hand-crafted SVG icons

### Utilities
- **UUID (v13.0.0)**: Generation of unique identifiers for employees
- **Web Vitals (v2.1.4)**: Measuring web performance metrics

### Testing
- **React Testing Library (v16.3.0)**: Testing utilities for React components
- **Jest DOM (v6.9.1)**: Custom Jest matchers for DOM testing
- **User Event (v13.5.0)**: Simulating user interactions in tests

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd React
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

The application will open in your browser at [http://localhost:3000](http://localhost:3000)

## Available Scripts

### `npm start`
Runs the app in development mode. The page will reload when you make changes.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder. The build is optimized for best performance.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

Ejects from Create React App configuration for full control over build tools and configurations.

## Project Structure

```
src/
├── component/          # Reusable React components
│   ├── Employee.js    # Employee card component
│   ├── AddEmployee.js # Add employee modal
│   ├── EditEmployee.js # Edit employee modal
│   └── Header.js      # Navigation header
├── pages/             # Page components
│   └── Employees.js   # Main employees page
├── App.js             # Main application component
├── index.js           # Application entry point
└── index.css          # Global styles
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available for educational purposes.
