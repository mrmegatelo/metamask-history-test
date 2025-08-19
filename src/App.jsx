import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useEffect, useState} from "react";

function App() {
    const [message, setMessage] = useState(window.history.state?.message)

  useEffect(() => {
      const triggerHistoryReplaceState = () => {
          const url = new URL(window.location.href)
          url.searchParams.set('test', '123')
          url.hash = '#message'
          const hash = '#_rp_cai=a8c83fda-ce7504249-931b-31667bef436a'
          window.history.replaceState({ message: 'The state has been replaced' }, '', hash)
          setMessage(window.history.state?.message)
      }

      // setTimeout(triggerHistoryReplaceState, 10) // It doesn't trigger page reload
      setTimeout(triggerHistoryReplaceState, 100) // It triggers pade reload
      // setTimeout(triggerHistoryReplaceState, 150) // It doesn't trigger page reload
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
      </div>
      <p id="message" className="read-the-docs">
          {message}
      </p>
    </>
  )
}

export default App
