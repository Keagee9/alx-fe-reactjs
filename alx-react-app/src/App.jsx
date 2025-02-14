import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import WelcomeMessage from './WelcomeMessage'; // Correct path - same directory

function App() {
  return (
    <div>
      {/* ... other content of your App component ... */}
      <WelcomeMessage /> {/* Include the WelcomeMessage component */}
      {/* ... more content if needed ... */}
    </div>
  );
}

export default App;
