import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';



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

import React from 'react';
import UserProfile from './components/UserProfile'; // Or './UserProfile' if in same directory

function App() {
  return (
    <div>
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      {/* ... other UserProfile components or other content ... */}
    </div>
  );
}

export default App;