export const getCart = () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  };
  
  export const saveCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  
  export const addToCart = (product) => {
    const cart = getCart();
    const existing = cart.find((item) => item._id === product._id);
  
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  
    saveCart(cart);
  };
  
  export const updateQuantity = (productId, quantity) => {
    const cart = getCart().map((item) =>
      item._id === productId ? { ...item, quantity } : item
    );
    saveCart(cart);
  };
  
  export const removeFromCart = (productId) => {
    const cart = getCart().filter((item) => item._id !== productId);
    saveCart(cart);
  };
  