import React, { createContext, CSSProperties, Dispatch, SetStateAction, useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from './components/pages/home-page';
import { HostPotluckPage } from './components/pages/host-potluck-page';
import { PotluckDetailsGuestPage } from './components/pages/potluck-details-guest-page';
import { PotluckDetailsHostPage } from './components/pages/potluck-details-host-page';
import { RegistrationPage } from './components/pages/registration-page';
import { SignInPage } from './components/pages/sign-in-page';
import { NavBar } from './navigation/navbar';
import { Provider } from 'react-redux';
import { Action, applyMiddleware, createStore } from 'redux';
import { UpdateDishReducer } from './reducers/edit-dish-reducer';
const style: React.CSSProperties = {color:"green"};
export type GlobalStyling = {
  style:React.CSSProperties
  setGlobalStyle: Dispatch<SetStateAction<CSSProperties>>
}

const stylingDefault: GlobalStyling ={
  style:{color:"red"},
  setGlobalStyle: () =>{

  }
}

const queryClient = new QueryClient();
export const styleContext = createContext(stylingDefault);

const dishStore = createStore(UpdateDishReducer);

function App() {
  const [globalStyle,setGlobalStyle] = useState(style)
 
  return <>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    
    <styleContext.Provider value={{style:globalStyle,setGlobalStyle:setGlobalStyle}}>
    
   
    <NavBar></NavBar>
      
      <Provider store={dishStore}>
      <Routes>
        <Route path='/' element={<SignInPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/registration' element={<RegistrationPage/>}/>
        <Route path='/potluckinfohost/:potluckID' element={<PotluckDetailsHostPage/>}/>
        <Route path='/potluckinfoguest/:potluckID' element={<PotluckDetailsGuestPage/>}/>
        <Route path='/hostpotluck/:potluckID' element={<HostPotluckPage/>}/>
      </Routes>
      </Provider>

      </styleContext.Provider>
    
    </BrowserRouter>
    </QueryClientProvider>
  </>
}

export default App;

