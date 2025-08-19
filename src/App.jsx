import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useEffect, useRef, useState} from "react";

const MAX_TIMES_TRIGGERED = 30

function App() {
    const [message, setMessage] = useState(window.history.state?.message)
    let timer = useRef(null)
    let timesTriggered = useRef(0);

  useEffect(() => {
      const triggerHistoryReplaceState = () => {
          const url = new URL(window.location.href)
          url.searchParams.set('test', '123')
          url.hash = '#message'
          const hash = '#_rp_cai=a8c83fda-ce7504249-931b-31667bef436a'
          timesTriggered.current++;
          const maxTriggeredTimesReached = timesTriggered.current === MAX_TIMES_TRIGGERED
          console.log({ timesTriggered: timesTriggered.current, MAX_TIMES_TRIGGERED, maxTriggeredTimesReached })
          const message = maxTriggeredTimesReached ? 'Finished!' : 'Pending...'
          window.history.replaceState({ message }, '', hash)
          setMessage(message)
          if (maxTriggeredTimesReached) {
              clearInterval(timer.current)
          }
      }

      timer.current = setInterval(triggerHistoryReplaceState, 20) // At some point it triggers pade reload

      return () => {
          clearInterval(timer.current)
      }
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
