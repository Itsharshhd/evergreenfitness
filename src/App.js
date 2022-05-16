import React from 'react';
import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./context/Auth";


import Home from './Components/Home';
import ConsultingPage from './Components/ConsultingPage';
import MembershipPage from './Components/MembershipPage';
import PaymentPage from './Components/PaymentPage';
import ProfilePage from './Components/ProfilePage';
import Store from './Components/Store';
import TrainingPage from './Components/TrainingPage';
import Footer from './Components/Footer';

import Navibar from './Components/Navibar';
import ProtectedRoute from './Components/ProtectedRoute';

import LogInPage from './Components/LogInPage';
import SignInPage from './Components/SignInPage';
import RegistrationPage from './Components/RegistrationPage';


const App = () => { 
  return(
    <div>
       

      <UserAuthContextProvider>
       <header>
          <Navibar />
        </header>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/consulting' element = {<ConsultingPage />} />
        <Route exact path='/training' element = {<TrainingPage />} />
        <Route exact path='/membership' element = {<MembershipPage />} />
        <Route exact path='/store' element = {<Store />} />
        <Route exact path='/login' element = {<LogInPage />} />
        <Route exact path='/signup' element = {<SignInPage />} />
        <Route exact path='/payment' element = {<PaymentPage />} />
        <Route exact path='/profile' 
        element = {
          <ProtectedRoute>
            <ProfilePage />
          </ ProtectedRoute>
        } />
        <Route exact path='/register' 
        element = {
          <ProtectedRoute>
            <RegistrationPage />
          </ProtectedRoute>
        } />
      </Routes>
      </UserAuthContextProvider>

        <footer>
          <Footer />
        </footer>
    </div>
  );
}

export default App;
