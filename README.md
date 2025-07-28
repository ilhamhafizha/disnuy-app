


# 🎬 Disney+ Clone

A clone of the Disney+ streaming platform built using **React + TypeScript**, consuming **TMDB API** for movie data, with authentication and hosting powered by **Firebase**.

## 🚀 Demo

🌐 Live: [https://disney-plus-clone-24a40.web.app](https://disney-plus-clone-24a40.web.app)
---

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Authentication**: Firebase Auth 
- **API**: [TMDB API](https://www.themoviedb.org/)
- **Hosting**: Firebase Hosting
- **Routing**: React Router DOM
- **State Management**: React Context API

---

## 🔑 Features

- 🔐 Firebase Authentication (Google Sign-In)
- 🎥 Fetch trending & featured movies from TMDB
- 🏠 Protected Routes for authenticated users
- 🖼️ Home page layout inspired by Disney+
- ⚡ Firebase Hosting for deployment
- 📱 Responsive UI with Tailwind CSS

---

## 🌐 API: The Movie Database (TMDB)

This project fetches movie and TV show data using the [TMDB API](https://www.themoviedb.org/documentation/api).

---

## 🚧 Installation

```bash
# 1. Clone the repo
git clone https://github.com/ilhamhafizha/disnuy-app.git
cd disnuy-app

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

---

## 🔥 Firebase Setup

1. Create a Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com)
2. Enable **Authentication > Sign-in method > Google**
3. Add your Firebase config to `src/firebase/firebaseConfig.ts`

```ts
export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID",
  // ...
};
```

---

## 🚀 Deployment

```bash
# Build your app
npm run build

# Deploy to Firebase Hosting
firebase deploy
```


