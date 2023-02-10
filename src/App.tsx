import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/pages/home-page';
import { PotluckDetailsGuestPage } from './components/pages/potluck-details-guest-page';
import { PotluckDetailsHostPage } from './components/pages/potluck-details-host-page';
import { RegistrationPage } from './components/pages/registration-page';
import { SignInPage } from './components/pages/sign-in-page';
import { NavBar } from './navigation/navbar';


function App() {
  return <>
    <NavBar/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignInPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/registration' element={<RegistrationPage/>}/>
        <Route path='/potluckinfohost/:potluckID' element={<PotluckDetailsHostPage/>}/>
        <Route path='/potluckinfoguest/:potluckID' element={<PotluckDetailsGuestPage/>}/>
      </Routes>
    
    </BrowserRouter>
  </>
}

export default App;
