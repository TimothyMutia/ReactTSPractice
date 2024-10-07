
import { useTheme } from '../Contexts/ThemeContext'

const About = () => {
  const {theme} = useTheme();
  return (
    <div className={theme === 'light' ? 'light' : 'dark'}>
      <div className='h-full text-dark pb-5 dark:text-white'>
          About
      </div>
    </div>
  )
}

export default About