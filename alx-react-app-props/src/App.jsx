import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from `./components/Counter.jsx`


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


import React from 'react';
import Counter from './Counter'; // Assuming Counter.jsx is in the same directory

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;

import ProfilePage from './ProfilePage';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return <ProfilePage userData={userData} />;
}

export default App;


// App.jsx
import React from 'react';
import ProfilePage from './ProfilePage';
import { UserProvider } from './UserContext'; // Import UserProvider

function App() {
  return (
    <UserProvider> {/* Wrap ProfilePage with UserProvider */}
      <ProfilePage />
    </UserProvider>
  );
}

export default App;