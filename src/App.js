import React from 'react';
import { Navbar } from 'react-bootstrap';
import posts from './components/posts/Posts';
import CustomNavbar from './components/Navbar'; // Correct import statement with a different name
import Intro from './components/intro/Intro';
import Posts from './components/posts/Posts';

function App() {
  return (
    <div className="App">
      <CustomNavbar /> {/* Using the CustomNavbar component */}
      {/* Other components or content */}
     <Intro/>
     <Posts/>
    </div>
  );
}

export default App;

