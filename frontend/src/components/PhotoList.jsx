import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const { photos, addToFav, removeFromFav, openModal } = props;
  const parsedPhotos = photos.map((photo) => {
    return (
      <PhotoListItem
        key={photo.id}
        photoID={photo.id}
        city={photo.location.city}
        country={photo.location.country}
        imageSource={photo.urls.full}
        name={photo.user.name}
        profile={photo.user.profile}
        similarPhotos={photo.similar_photos}
        addToFav={addToFav}
        removeFromFav={removeFromFav}
        openModal={openModal}
      />
    );
  });

  return <ul className="photo-list">{parsedPhotos}</ul>;
};

export default PhotoList;
