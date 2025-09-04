import './Quote.css'

function Quote({ author, photo, year, version, speech, onHandleRu, onHandleEn }) {
  return (
    <li className="list__item">
      <div className='left'>
        <img src={photo} />
      </div>
      <div className='right'>
        <p className='list__item-text' style={{fontStyle: 'italic'}}>{version}</p>
        <h3>{author}</h3>
        <h5>{year}</h5>
        <div className='list__item-btns'>
          <button className='btn btn__version' onClick={onHandleRu}>Ru</button>
          <br />
          <button className='btn btn__version' onClick={onHandleEn}>En</button>
        </div>
        <a className='list__item-speech' href={speech} target='_blank'>Full speech</a>
      </div>
    </li>
  )
}

export default Quote