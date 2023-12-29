import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
// Al borrar de acá el strictMode de React evitamos que la aplicacción se renderice toda completa y por lo tanto no persista los datos en el localStorage
