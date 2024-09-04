import { useTheme } from '../Contexts/ThemeContext'
import './styles.css'

const Theme_Button = () => {
    const {theme, setTheme} = useTheme();
    const toggle = () => {
        if(theme === '' || theme === 'light'){
            setTheme('dark');
        }
        else if (theme === 'dark'){
            setTheme('light');
        }
    }
  return (

        <div className='Theme_Button'>
            <label className={theme === 'light' ? 'slider' : 'slider dark'}>
                <input type="radio" id="switch" onClickCapture={() => toggle()} />
            </label>
        </div>
  )
}

export default Theme_Button
