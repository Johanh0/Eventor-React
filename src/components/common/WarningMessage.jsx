import { useContext } from 'react'
import { PiWarningFill } from 'react-icons/pi'
import { DarkModeContext } from '../../context/DarkModeProvider'

const WarningMessage = ({ message }) => {

    const { darkMode } = useContext(DarkModeContext)

  return (
    <div className={`flex justify-center items-center flex-col text-2xl ${darkMode ? 'text-secondary-color' : 'text-primary-color'}`}>
        <PiWarningFill/>
        <p>{ message }</p>
    </div>
  )
}

export default WarningMessage
