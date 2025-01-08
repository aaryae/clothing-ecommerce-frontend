import { CartProvider } from 'context/cartContext.tsx'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <CartProvider>
    <App />
  </CartProvider>
)
