import { NavLink } from 'react-router-dom';
import styles from './NavHeader.module.css';

const PageHeader = (props) => {
    return (
      <div>
        <nav>

          <ul className={styles.nav}>
            <a className={styles.a} href='/'>
                Home
            </a>
            <a className={styles.a} href='/movies'>
                Movies
            </a>
            <a className={styles.a} href='/series'>
                Series
            </a>
            <a className={styles.a} href='/news'>
                News
            </a>
          </ul>
        </nav>
      </div>
    );
  };

export default PageHeader;