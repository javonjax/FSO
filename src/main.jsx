import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const notes = [
  {
    id: 1,
    content: 'HTML',
    important: true
  },
  {
    id: 2,
    content: 'JS',
    imporant: true
  },
  {
    id: 3,
    content: 'CSS',
    important: true
  }
];

ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />)
