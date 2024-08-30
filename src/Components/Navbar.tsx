import './styles.css'
import menu_Items from './menu_Items'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="Header">
        <ul className="Menu">
        {menu_Items.map((menu_Items, index) => {
            return (
            <li className="Menu_Items" key={index}>
                <Link className="Menu_Item" to={menu_Items.url}> {menu_Items.title} </Link>
            </li>
            );
        })}
        </ul>
  </nav>
    
  )
}

export default Navbar