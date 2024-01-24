import React, { useContext, useState } from 'react'
import Button from './Button'
import { SettingsContext } from '../context/SettingsContext'

const SetPomodoro = ({ }) => {
    const { updateExecute } = useContext(SettingsContext)
    const [newTimer, setNewTimer] = useState({
        work: 25,
        short: 5,
        long: 10,
        active: 'work'
    })

    const handleChange = input => {
        const { name, value } = input.target
        switch (name) {
            case "work":
                setNewTimer({
                    ...newTimer,
                    work: parseInt(value)
                })
                break;
            case 'shortBreak':
                setNewTimer({
                    ...newTimer,
                    short: parseInt(value)
                })
                break;
            case "longBreak":
                setNewTimer({
                    ...newTimer,
                    long: parseInt(value)
                })

            default:
                break;
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        updateExecute(newTimer)
    }

    return (
        <div className="form-container">
            <form noValidate>
                <div className='input-wrapper'>
                    <div className='input-div'>
                        <label htmlFor="work">Work</label>
                        <input
                            id='work'
                            type="text"
                            className='input'
                            name='work'
                            onChange={handleChange}
                            value={newTimer.work} />
                    </div>
                    <div className='input-div'>
                        <label htmlFor="work">Short</label>
                        <input
                            type="text"
                            className='input'
                            name='shortBreak'
                            onChange={handleChange}
                            value={newTimer.short} />
                    </div>
                    <div className='input-div'>
                        <label htmlFor="work">Long</label>
                        <input
                            type="text"
                            className='input'
                            name='longBreak'
                            onChange={handleChange}
                            value={newTimer.long} />
                    </div>
                </div>
                <Button
                    title="Set Timer"
                    _callback={handleSubmit} />
            </form>
        </div>
    )
}

export default SetPomodoro