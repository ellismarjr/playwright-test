import { Toaster } from 'sonner';
import { SignIn } from './modules/signin';
import './styles/index.css';

function App() {
  return (
    <>
      <SignIn />
      <Toaster position='top-right' offset={40} />
    </>
  )
}

export default App
