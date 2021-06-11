import logo from './logo.svg';
import './App.css';
import Header from './Header';
import MainPage from './MainPage';
import Car from './Car';
import React, { useEffect, useState } from 'react';
import About from "./About"

function App() {
  const [car, setCar] = useState(null);
  const [isAboutUs, setAboutUs ] = useState(false);
  return (
    <div className="App">
      <Header setAboutUs={setAboutUs} />
      { isAboutUs ? (<About/>) : (car ? <Car {...car} /> : <MainPage setCar={setCar} />) }
      
    </div>
  );
}

export default App;
