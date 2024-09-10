import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import rootReducer from './reducer';
import { configureStore } from '@reduxjs/toolkit';

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const store = configureStore({
  reducer:rootReducer,
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
<<<<<<< HEAD
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <HotelPage />
    </ClerkProvider>
=======
    <Provider store={store}>
      <App />
    </Provider>
>>>>>>> be619bb012c610c0ef996c3bae85076d2bf2b722
  </StrictMode>,
)
