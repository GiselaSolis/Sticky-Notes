import { NavLink } from 'react-router-dom';
import './styles.css'


export default function Navbar() {
  const navMenu = [
    { name: "All", href: "/" },
    { name: "Reminders", href: "/reminder" },
    { name: "Tasks", href: "/task" },
    { name: "Notes", href: "/note" }
  ]

  return (
    <div className='navbar'>
      <div className='logo-container'>
        <img src="/public/logo.png" alt='logo'/>
      </div>
        
        <ul>
          {navMenu.map((navItem) => (
            <li key={navItem.name}>
              <NavLink
                to={navItem.href}
                activeClassName="active">
                  {navItem.name}
              </NavLink>
            </li>
          ))}
        </ul>
    </div>
  )
}
