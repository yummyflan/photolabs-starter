import React from 'react';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};


const App = () => {
  const { id, location, imageSource, username, profile } = sampleDataForPhotoListItem
  const samplePhoto = 
      <PhotoListItem 
      key={id} 
      id={id} 
      city={location.city} 
      country={location.country} 
      imageSource={imageSource} 
      username={username}  
      profile={profile}/>;
  
  const photos = new Array(3).fill(samplePhoto)
  return (
    <div className="App">
      {photos}
    </div>
  );
};

export default App;
