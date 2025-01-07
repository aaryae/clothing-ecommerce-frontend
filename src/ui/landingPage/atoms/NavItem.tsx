import { NavLink } from 'react-router-dom';

const NavItem = ({ value, route }: { value: string; route: string }) => {
  return (
    <li className='px-3 text-custom font-medium py-1 tracking-wider'>
      <NavLink to={route} className={({ isActive }) => (isActive ? 'text-[#b96f54] font-bold' : '')}>
        {value}
      </NavLink>
    </li>
  )
}

export default NavItem
