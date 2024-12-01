import { NavLink } from 'react-router-dom';
import styles from './NavHeader.module.css';
import SearchBox from './components/Search';

const PageHeader = (props) => {
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
            <li>
              <NavLink
              to="/series"
              className={({ isActive }) => isActive ? styles.active : undefined}
              >
                Series
              </NavLink>
            </li>
            <li>
              <NavLink
              to="/news"
              className={({ isActive }) => isActive ? styles.active : undefined}
              >
                News
              </NavLink>
            </li>
          </ul>
        </nav>
        <SearchBox />
      </div>
    );
  };

export default PageHeader;