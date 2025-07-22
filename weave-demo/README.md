# Weave Hack

A modern React demo showcasing a clean login system and dashboard. This project demonstrates best practices in UI/UX, authentication flow, and responsive design for web applications.

---

## Table of Contents
- [Features](#features)
- [Demo Credentials](#demo-credentials)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Features in Detail](#features-in-detail)
- [Customization](#customization)
- [Screenshots](#screenshots)
- [Troubleshooting & FAQ](#troubleshooting--faq)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Modern Login Interface**: Clean, responsive design with smooth animations
- **Form Validation**: Client-side validation with error handling
- **Loading States**: Visual feedback during authentication
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dashboard**: Simple dashboard interface after successful login
- **Demo Credentials**: Easy testing with provided demo credentials

## Demo Credentials

- **Username**: `admin`
- **Password**: `password`

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm start
   ```
2. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

To create a production build:
```bash
npm run build
```

---

## Project Structure

```
src/
├── App.js          # Main application component
├── App.css         # Global styles
├── Login.js        # Login component
├── Login.css       # Login styles
├── Dashboard.js    # Dashboard component
└── Dashboard.css   # Dashboard styles
```

## Technologies Used

- React 19
- CSS3 with modern features
- Responsive design principles
- Modern JavaScript (ES6+)

## Features in Detail

### Login Screen
- Gradient background with animated card
- Form validation and error handling
- Loading states with disabled button
- Responsive design for all screen sizes

### Dashboard
- Clean navigation with user info
- Card-based layout for content
- Hover effects and smooth transitions
- Logout functionality

## Customization

The application is designed to be easily customizable:
- Colors can be modified in the CSS files
- Login logic can be extended in `Login.js`
- Dashboard content can be updated in `Dashboard.js`
- Styling can be adjusted in the respective CSS files

## Screenshots

> _You can add screenshots or GIFs here to showcase the UI. Place images in the `public/` folder and reference them below._
>
> ![Login Screen](public/login-screenshot.png)
> ![Dashboard](public/dashboard-screenshot.png)

## Troubleshooting & FAQ

- **Port already in use?**
  - Make sure nothing else is running on port 3000, or change the port with `PORT=3001 npm start`.
- **Node version issues?**
  - Ensure you are using Node.js 14 or higher. Use `node -v` to check.
- **App not loading?**
  - Delete `node_modules` and run `npm install` again.

## Contributing

This project is for demonstration purposes and does not accept external contributions. For learning or personal use, feel free to fork and modify!

## License

This project is unlicensed and provided for demo purposes only.
