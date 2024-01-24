import { useContext, useEffect } from "react";
import CountdownAnimation from "./components/CountdownAnimation";
import SetPomodoro from "./components/SetPomodoro";
import { SettingsContext } from "./context/SettingsContext";
import Button from "./components/Button";

function App() {
  const {
    pomodoro,
    executing,
    setCurrentTimer,
    SettingsBtn,
    children,
    startAnimate,
    startTimer,
    pauseTimer,
    updateExecute
  } = useContext(SettingsContext)

  useEffect(()=>updateExecute(executing), [executing, startAnimate])

  return (
    <div className="container">
      <h1>Pomdoro</h1>
      {pomodoro == 0 ? <SetPomodoro /> : <>
        <ul className="labels">
          <li>
            <Button
              title='Work'
              activeClass={executing.active === 'work' && "active-label"}
              _callback={() => setCurrentTimer('work')}
            />
          </li>
          <li>
            <Button
              title='Short Break'
              activeClass={executing.active === 'short' && "active-label"}
              _callback={() => setCurrentTimer('short')}
            />
          </li>
          <li>
            <Button
              title='Long Break'
              activeClass={executing.active === 'long' && "active-label"}
              _callback={() => setCurrentTimer('long')}
            />
          </li>
        </ul>
        <Button
          title="Settings"
          _callback={SettingsBtn}
        />
        <div className="time-container">
          <div className="time-wrapper">
            <CountdownAnimation
              key={pomodoro}
              timer={pomodoro}
              animate={startAnimate}
            >
              {children}
            </CountdownAnimation>
          </div>
        </div>
        <div className="button-wrapper">
          <Button
            title='Start'
            className={!startAnimate ? 'active' : undefined}
            _callback={startTimer}
          />
          <Button
            title='Pause'
            className={startAnimate ? 'active' : undefined}
            _callback={pauseTimer}
          />
        </div>
      </>}
    </div>
  );
}

export default App;
