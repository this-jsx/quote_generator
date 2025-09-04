import './Button.css'

function Button({ btntText, onHandle }) {
  return <button className='btn' onClick={onHandle}>{btntText}</button>
}

export default Button