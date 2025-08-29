import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './app/service/store.ts'
import './index.css'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";


createRoot(document.getElementById('root')!).render(
  
  <Provider store = {store}>
    <App />
  </Provider>,
)

