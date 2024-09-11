import './styles.css'
import { useTheme } from '../Contexts/ThemeContext'

const About = () => {
  const {theme} = useTheme();
  return (
    <div className={theme === 'light' ? 'About' : 'About dark'}>About</div>
  )
}

export default About