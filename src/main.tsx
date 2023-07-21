import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "../node_modules/bootstrap"
import './index.css'
import Card from './Pokemon/Card.tsx'




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <App />
     <Card/>
  </React.StrictMode>
)
