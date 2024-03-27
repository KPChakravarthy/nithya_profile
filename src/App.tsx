import React from 'react';
import logo from './logo.svg';
import './App.scss';
import LeftSection from './coponents/LeftSection';
import RightSection from './coponents/RightSection';
import profileData from './profileData.json';

function App() {
  return (
    <div className='appSection'>
      <LeftSection sectionData={profileData.home.leftBar} />
      <RightSection sectionData={profileData.home.rightBar} />
    </div>
  );
}

export default App;
