import { BrowserRouter } from 'react-router-dom'
import { LangProvider } from '../../data/signals';

import NavBar from './NavBar';

function RoterLinks() {
  return (
    <LangProvider>
      <BrowserRouter>

        <NavBar />


        
      </BrowserRouter>
    </LangProvider>
  );
}

export default RoterLinks;