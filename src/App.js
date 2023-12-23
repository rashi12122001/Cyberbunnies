import React from 'react';
import { Navbar } from 'react-bootstrap';
import CustomNavbar from './components/Navbar'; // Correct import statement with a different name
import Intro from './components/intro/Intro';
import Posts from './components/posts/Posts';
import Stats from './components/Stats/Stats';
import Explore from './components/explore/Explore';

function App() {
  return (
    <div className="App">
      <CustomNavbar /> {/* Using the CustomNavbar component */}
      {/* Other components or content */}
     <Intro/>
     <Posts/>
     <Stats/>
     <Explore/>
    </div>
  );
}

export default App;

