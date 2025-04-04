
# VÖX PRIMA – Frontend

Welcome to the frontend of **VÖX PRIMA**, a fashion e-commerce application focused on creative expression through unique t-shirt prints. Built with React, the app delivers a modern, dynamic, and responsive shopping experience.

## 🚀 Features

- Browse a full catalog of shirts with artwork focused on **nature**, **music**, and **art**.
- View individual product pages with detailed images and descriptions.
- Add products to cart and complete purchases.
- Login, register, and personalized user area.
- View past orders (My Orders).
- Mobile-first responsive layout.

## 🔧 Technologies Used

- **React** (SPA)
- **React Router DOM**
- **CSS Modules**
- **Cloudinary** for hosting product images
- **LocalStorage** for managing cart and user token

## 🌐 Environment Variables

Create a `.env` file in the root folder with:

```
VITE_API_BASE_URL=https://vox-prima-backend.fly.dev/api
```

## 📁 Folder Structure

```
src/
│
├── assets/               # Logos, images, etc.
├── components/           # Navbar, Footer, etc.
├── context/              # Global context (e.g., UserContext)
├── pages/                # Page-level components (Home, Product, Orders...)
├── services/             # API abstraction
├── styles/               # CSS files
└── utils/                # Utilities (e.g., cart management)
```

## 🛠️ Setup

1. Clone the repo:
```bash
git clone https://github.com/youruser/vox-prima-frontend.git
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

## 🔗 Deployment

Deployed via **Netlify**:
👉 https://precious-lokum-1796e6.netlify.app

## 🙌 Credits

Created by **Paulo Prado** as a final project at Ironhack.

## 📃 License

MIT
