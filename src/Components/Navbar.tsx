import menu_Items from './menu_Items'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='w-full flex flex-row'>
        <ul className="flex flex-row gap-10">
        {menu_Items.map((menu_Items, index) => {
            return (
            <li className="font-New-Amsterdam tracking-wider text-light-orange text-3xl " key={index}>
                <Link className="active:text-[#DA940F]" to={menu_Items.url}> {menu_Items.title} </Link>
            </li>
            );
        })}
        </ul>
  </nav>
    
  )
}

export default Navbar