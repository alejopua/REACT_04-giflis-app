import PropTypes from 'prop-types';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {

  getGifs(category);

  return (
    <>
      <h2>{category}</h2>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
};
