import { useTheme } from '../Contexts/ThemeContext'
import './styles.css'

const Contact = () => {
  const {theme} = useTheme();
  return (
    <div className={theme === 'light' ? 'Contact' : 'Contact dark'}>Contact</div>
  )
}

export default Contact