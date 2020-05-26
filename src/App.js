import React from 'react';
import HelloWorld from './components/HelloWorld'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />

      <HelloWorld name="Winnie"/>
      
      <Footer />
    </div>
  );
}

export default App;
