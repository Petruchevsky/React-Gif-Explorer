import './GifItem.css'

function GifItem ({ gif }) {

  return (

    <div className='gif animate__rubberBand'>
      <img src={gif.url} alt={gif.title} />
    </div>
  )
}

export default GifItem;

