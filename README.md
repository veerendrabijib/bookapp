# 📚 BookLovers - Social Reading Platform

A complete social network for book lovers! Track your reading, discover new books, write reviews, and connect with other readers. Works on phones, tablets, and computers.

## ✨ Features

- **📖 Book Tracking** - Organize books into three shelves: Currently Reading, Want to Read, and Finished
- **📊 Reading Progress** - Visual progress bars show how far you've read in each book
- **⭐ Rating & Reviews** - Rate books with stars and write detailed reviews with spoiler warnings
- **👥 Social Feed** - See what friends are reading, like and comment on their reviews
- **🔍 Book Discovery** - Get personalized recommendations based on your reading taste
- **📈 Trending Books** - See what books are popular this week
- **📱 Responsive Design** - Automatically adapts to desktop, tablet, and mobile screens
- **👤 User Profiles** - View reading stats, goals, followers, and following
- **🎯 Reading Goals** - Set and track annual reading goals
- **🔎 Search** - Find books, authors, and friends quickly

## 🛠️ Tech Stack

### Frontend
- **React** (v18+) - Component-based UI library
- **JavaScript (ES6+)** - Modern JavaScript
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Lucide React** - Beautiful icon library

### Development Tools
- **Node.js** (v16+ recommended) - JavaScript runtime
- **npm** or **yarn** - Package manager
- **Vite** or **Create React App** - Build tool

## 📋 Prerequisites

Before you begin, make sure you have these installed on your computer:

- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- A code editor like **VS Code**

To check if you have Node.js installed:
```bash
node --version
npm --version
```

## 🚀 Installation

### Step 1: Create a New React Project

```bash
# Using Create React App
npx create-react-app booklovers-app

# OR using Vite (faster)
npm create vite@latest booklovers-app -- --template react

# Navigate to the project folder
cd booklovers-app
```

### Step 2: Install Required Dependencies

```bash
# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind
npx tailwindcss init -p

# Install Lucide icons
npm install lucide-react
```

### Step 3: Configure Tailwind CSS

Edit `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Edit `src/index.css` (or `src/App.css`):
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 4: Add the BookLovers Component

1. Copy the `book-lovers-app.jsx` file to your `src` folder
2. Rename it to `BookLoversApp.jsx` (if needed)

### Step 5: Update Your App Entry Point

Edit `src/App.jsx`:
```javascript
import BookLoversApp from './BookLoversApp'
import './App.css'

function App() {
  return <BookLoversApp />
}

export default App
```

Or edit `src/main.jsx`:
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import BookLoversApp from './BookLoversApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BookLoversApp />
  </React.StrictMode>,
)
```

## ▶️ Run the Application

### Development Mode

```bash
# Start the development server
npm run dev

# OR if using Create React App
npm start
```

The app will open in your browser at:
- **Vite**: `http://localhost:5173`
- **Create React App**: `http://localhost:3000`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build (Vite only)
npm run preview
```

## 📱 Usage Guide

### For Desktop Users:
1. Click on navigation buttons in the left sidebar
2. Use the search bar at the top to find books
3. Click on any book card to open details and write reviews

### For Mobile Users:
1. Use the bottom navigation bar to switch pages
2. Tap on books to open details
3. All features work the same as desktop!

### Main Actions:
- **Add a book**: Click the blue "What are you reading?" button on Home
- **Track progress**: Click on a book in "Currently Reading" to update
- **Write a review**: Click any finished book and add stars + text
- **Discover books**: Go to Discover page for recommendations
- **View stats**: Go to Profile page to see your reading statistics

## 📂 Project Structure

```
booklovers-app/
├── public/
│   └── index.html
├── src/
│   ├── BookLoversApp.jsx    # Main app component
│   ├── App.jsx               # Entry point
│   ├── main.jsx              # React root
│   └── index.css             # Tailwind styles
├── package.json
├── tailwind.config.js
├── vite.config.js            # Or react-scripts config
└── README.md
```

## 🎨 Customization

### Change Colors
Edit the component's Tailwind classes:
- Blue theme: `bg-blue-500`, `text-blue-500`
- Purple theme: `bg-purple-500`, `text-purple-500`
- Green theme: `bg-green-500`, `text-green-500`

### Add More Features
The code is modular and easy to extend:
- Add new pages in the `currentPage` state
- Create new book shelves
- Add more social features

### Modify Sample Data
Edit the `useState` hooks in the component:
- `books` - Your reading lists
- `feed` - Social feed posts
- `recommendations` - Book suggestions

## 🐛 Troubleshooting

### Icons not showing?
Make sure you installed `lucide-react`:
```bash
npm install lucide-react
```

### Tailwind styles not working?
1. Check `tailwind.config.js` content paths
2. Make sure `@tailwind` directives are in your CSS file
3. Restart the dev server

### App not starting?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

## 🔮 Future Enhancements

- [ ] Backend API integration (Node.js + Express)
- [ ] Database connection (MongoDB/PostgreSQL)
- [ ] User authentication (login/signup)
- [ ] Real book data from APIs (Google Books, OpenLibrary)
- [ ] Chat/messaging between users
- [ ] Book clubs and group reading
- [ ] Reading challenges and achievements
- [ ] Dark mode toggle
- [ ] Export reading stats
- [ ] Mobile app (React Native)

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Built with ❤️ for book lovers everywhere!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have questions or need help:
- Open an issue on GitHub
- Check the documentation files included in this project

---

**Happy Reading! 📚✨**
