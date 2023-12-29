/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {
  const { images, isLoading } = useFetchGifs( category );

  return (
    <>
      <h2>{category}</h2>
      {
        isLoading && ( <p>Loading...</p> )
      }
      <div className='card-grid'>
        {
          images.map( (images) => (
            <GifItem 
              key={images.id}
              {...images} 
            />
          ))
        }
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
};
