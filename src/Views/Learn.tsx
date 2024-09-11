import { useTheme } from '../Contexts/ThemeContext'
import './styles.css'

const Learn = () => {
  const {theme} = useTheme();
  return (
    <div className={theme === 'light' ? 'Learn' : 'Learn dark'}>Learn</div>
  )
}

export default Learn