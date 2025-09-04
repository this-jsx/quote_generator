import { useState } from 'react'
import './App.css'
import data from './assets/data.json'
import Quote from './components/Quote'
import Button from './components/Button'

function App() {
  const [quotes, setQuotes] = useState(false)
  const [version, setVersion] = useState(data[0].langs[1].content);

  function randomQuote() {
    const quote = data[Math.floor(Math.random() * data.length)]
    
    setQuotes(quote)

    setVersion((version) => (version = quote.langs[1].content));

    return quote
  }

  function handleRu() {
    setVersion(quotes.langs[0].content)
  }

  function handleEn() {
    setVersion(quotes.langs[1].content)
  }

  return (
    <div>
      <h1>Quotes</h1>
      <Button btntText='Get random quote' onHandle={randomQuote} />
      <ul>
        {
          !quotes ? <h2 style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '70vh' }}>
            <span style={{background: 'rgba(25, 25, 112, .5)', width: '30rem', margin: '0 auto', color: '#fff', padding: '10px 20px', borderRadius: '20px'}}>
              Start quoting by clicking the green button...  and keep clicking 🥳 </span>
          </h2> : 
            <>
              <Quote
                key={quotes.text}
                author={quotes.author}
                photo={quotes.photo}
                year={quotes.year}
                speech={quotes.speech}
                version={version}
                onHandleRu={handleRu}
                onHandleEn={handleEn}
              />
              <button className='btn btn__clear' onClick={() => setQuotes(false)}>Clear quotes</button>
            </>
          }
      </ul>
    </div>
  )
}

export default App
