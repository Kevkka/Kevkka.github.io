import { NavLink } from 'react-router-dom';
import styles from './NavHeader.module.css';

const PageHeader = () => {
    return (
      <div>
        <nav>
          <ul className='nav'>
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? styles.active : undefined}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
              to="/movies"
              className={({ isActive }) => isActive ? styles.active : undefined}
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  };

export default PageHeader;