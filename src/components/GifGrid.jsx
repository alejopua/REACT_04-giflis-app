/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import { getGifs } from '../helpers/getGifs';
import { useState, useEffect } from 'react';

export const GifGrid = ({category}) => {
  const [images, setImages] = useState([])

  const getImages = async() => {
    const newImages = await getGifs(category);
    setImages(newImages);
  }

  useEffect(() => {
    getImages();
  }, []);
  

  return (
    <>
      <h2>{category}</h2>
      <ol>
        {
          images.map( ({id, title}) => (
            <li key={id}>{title}</li>
          ))
        }
      </ol>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
};
