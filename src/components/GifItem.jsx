import PropTypes from 'prop-types'

export const GifItem = ({url, title}) => {
  const newTitle = title.split(' ').splice(0,2).join(' ');

  return (
    <div className='card'>
      <img src={url} alt={title} />
      <p>{newTitle}</p>
    </div>
  )
}

GifItem.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}