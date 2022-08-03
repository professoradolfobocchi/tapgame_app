import { useState } from 'react';
import './App.css';
import Banner from './components/banner';
import Footer from './components/footer';
import Header from './components/header'; 

function App() {
  const [openSignin, setOpenSignin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  
  function handleSignin() {
    setOpenSignin(!openSignin);
  }
  function handleSignup() {
    setOpenSignup(!openSignup);
  }

  return (
    <>
      <Header 
        onClickSignin={handleSignin} 
        onClickSignup={handleSignup}
        openSignin={openSignin}
        />
      <Banner 
        openSignup={openSignup} 
        onClickCancel={handleSignup} />
      <Footer />
    </>
  );
}

export default App;
