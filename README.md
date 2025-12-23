# Data Science Portfolio Website

A modern, responsive portfolio website showcasing data science and machine learning projects. Built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern Stack**: React 18 + TypeScript + Vite
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Project Showcase**: Detailed modals for each project with images, GIFs, and descriptions
- **Clean Architecture**: Component-based structure with TypeScript
- **Fast Performance**: Optimized build with Vite

## 📁 Project Structure

```
ds_portfolio/
├── portfolio/          # Main portfolio website
│   ├── src/            # Source code
│   │   ├── components/ # React components
│   │   └── data/       # Project data
│   ├── public/         # Static assets (images, PDFs)
│   └── dist/           # Build output (generated)
└── projects/           # Source project files (excluded from git)
```

## 🛠️ Setup & Development

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📦 Deployment

This portfolio is designed to be deployed on **Vercel**:

1. Push to GitHub
2. Import repository in Vercel
3. Vercel auto-detects Vite configuration
4. Deploy!

## 🎨 Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📝 License

© 2025 Mohamed Abuhalala. All rights reserved.

