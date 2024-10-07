import { useTheme } from '../Contexts/ThemeContext'

const Contact = () => {
  const {theme} = useTheme();
  return (
    <div className={theme === 'light' ? 'light' : 'dark'}>
      <div className='h-full text-dark pb-5 dark:text-white'>Contact</div>
    </div>
  )
}

export default Contact