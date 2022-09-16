import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [paras, setParas] = useState(4)
  const [html, setHtml] = useState("false")
  const [text, setText] = useState("")
  const handleSubmit = async () => {
      
    const url = `https://baconipsum.com/api/?type=all-meat&${paras}=2&format=${html == "true" ? "html" : "text"}`
    
    try {
      const response = await fetch(url).then(x => x.text())

      setText(response)
    } catch { }
     
  }

  useEffect(() => {
    
    handleSubmit()
  },[paras,html])
  return (
    <div className="App">
      <header>
        React sample texst generator app  
      </header>

      <main>
        <section>
          <form action="#" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="paragraphs">Paragraphs</label>
                <input value={paras} onChange={e => setParas(e.target.value > 0 ? e.target.value : 0)} id='paragraphs' type="number" />
              </div>
            <div>
              <label htmlFor="html">Include HTML</label>
              <select name="" id="html" onChange={e => setHtml(e.target.selectedOptions[0].value)} >
                <option value="false">No</option>
                <option value="true">yes</option>
           
                
              </select>
              </div>
            </form>
        </section>

        <section id='textSection'>
          <textarea disabled={true} id="textarea" value={text}></textarea>
        </section>
      </main>
    </div>
  )
}

export default App
