import ReactDOMClient from 'react-dom/client'

import App from './App'

const rootElement = document.getElementById('root')

if (rootElement) {
    // Verifica se o elemento com ID "root" existe no documento
    const root = ReactDOMClient.createRoot(rootElement)
    root.render(<App />)
} else {
    alert('Não foi possível carregar os elementos do documento.')
    throw new Error('Element with ID "root" not found in the document.')
}
