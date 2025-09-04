import images from '../img/t_1.jpeg'

function Gallery() {
  console.log(images)
  return (
    <div>
      <ul className="gallery__list">
        {/* {images.map(item => <li>
          <img src={item} />
        </li>)} */}
      </ul>
    </div>
  )
}

export default Gallery