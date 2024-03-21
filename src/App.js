import React from 'react';
import CustomNavbar from './components/Navbar'; // Correct import statement with a different name
import Intro from './components/intro/Intro';
import Posts from './components/posts/Posts';
import Stats from './components/Stats/Stats';
import Explore from './components/explore/Explore';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Cursor from './components/cursor/Cursor';
// import CustomScroll from 'react-custom-scroll';
// import Scroll from './components/scroll/Scroll';
// import CustomScroll from 'react-custom-scroll';
function App() {
  return (
    <div className="App">
      <Cursor></Cursor>
      <CustomScroll>
  your content goes here
</CustomScroll>
      {/* <Scroll></Scroll> */}
      <CustomNavbar /> {/* Using the CustomNavbar component */}
      {/* Other components or content */}
     <Intro/>
     <Stats/>
     <Posts/>
     <Explore/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;

