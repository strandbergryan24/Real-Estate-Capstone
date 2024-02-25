import React from 'react' 
import Featured from './componenets/Featured/Featured'
import NavBar from './components/Navbar/NavBar';
import Hero from './components/Hero/Hero';
import Best from './components/Best/Best';

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Best />
      <Featured />
    </div>
  );
}

export default App;
