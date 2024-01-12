import { Toaster } from 'sonner';
import './styles/index.css';
import { Router } from './routes';

function App() {
  return (
    <>
      <Router />
      <Toaster position='top-right' offset={40} />
    </>
  )
}

export default App
