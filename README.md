# 🔄 Habit Tracker

Track, log, and visualize your daily habits.

Live Link: N/A

## 📌 Table of Contents

- [🚀 Getting Started](#-getting-started)
- [🛠️ Tech Stack](#-tech-stack)
- [📦 Installing](#-installing)
- [💻 Running the Application](#-running-the-application)
- [📋 Approach](#-approach)
- [📸 Screenshots](#-screenshots)
- [🚀 Deployment](#-deployment)
- [👤 Author](#-author)

## 🚀 Getting Started

This project is built using HTML, CSS, JavaScript and Jest and hosted on Netlify.

## 🛠️ Tech Stack

- HTML
- CSS
- JavaScript
- Jest

## 📦 Installing

Clone the repository and install dependencies:

N/A

## 💻 Running the Application

To start the development server:

- Install the **Live Server extension**(by Ritwick Dey) in VsCode
- Right-click anywhere in the html code
- Select _Open with Live Server_ from the menu to start the development server

Or

Double click the `index.html` file to open the code in the browser of your choice.

## 📋 Approach

**Setting up Jest to work with ESM instead of CJS**
1. Install `jest` and `jest-environment-jsdom`
```sh
npm install --save-dev jest jest-environment-jsdom
```
2. In `package.json` add the following:
```json
"scripts": {
"test": "node --experimental-vm-modules node_modules/.bin/jest"
"test:watch": "node --experimental-vm-modules node_modules/.bin/jest --watch"
},
"type": "module"
```
3. Add a jest configuration file at the root of your project `jest.config.mjs` and add the following configurations:
```mjs
export default {
	testEnvironment: "jsdom",
	transform: {},
}
```

## 📸 Screenshots
![wireframe](./screenshots/screenshot.png)

## 🚀 Deployment

Netlify

## 👤 Author

Victor Bruce