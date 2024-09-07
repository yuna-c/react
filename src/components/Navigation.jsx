// src/components/Navigation.jsx
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <nav style={{ marginBottom: '20px' }}>
      <ul style={{ display: 'flex', gap: '10px', listStyle: 'none' }}>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'blue',
              textDecoration: isActive ? 'underline' : 'none'
            })}
          >
            Main
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user"
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'blue',
              textDecoration: isActive ? 'underline' : 'none'
            })}
          >
            User
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/empty"
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'blue',
              textDecoration: isActive ? 'underline' : 'none'
            })}
          >
            Empty
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
