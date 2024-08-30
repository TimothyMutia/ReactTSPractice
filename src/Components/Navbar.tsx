import './styles.css'
import menu_Items from './menu_Items'

const Navbar = () => {
  return (
    <nav className="Header">
        <ul className="Menu">
        {menu_Items.map((menu_Items, index) => {
            return (
            <li className="Menu_Items" key={index}>
                <a href={menu_Items.url}>{menu_Items.title}</a>
            </li>
            );
        })}
        </ul>
  </nav>
    
  )
}

export default Navbar