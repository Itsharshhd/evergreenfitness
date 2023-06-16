import React from 'react';
import { Home, About, Programs, Plans, Testimonials, Footer, Gallery, JoinPage } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'
        element={
          <div className='App'>
            <Home />
            <Programs />
            <About />
            <Plans />
            <Testimonials />  
            <Footer />    
          </div>
          } 
        />
        <Route path='/gallery'
        element={<Gallery />}
        />
        <Route path='/join'
        element={ <JoinPage /> }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
