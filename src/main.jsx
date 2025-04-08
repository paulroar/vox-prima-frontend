import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/UserContext'
import { CartProvider } from './context/CartContext';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ToastContainer, Zoom } from 'react-toastify';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
    <UserProvider>
      <BrowserRouter>
        <App />
        <ToastContainer position="top-center" autoClose={850} transition={Zoom} />
      </BrowserRouter>
    </UserProvider>
    </CartProvider>
  </StrictMode>
);
