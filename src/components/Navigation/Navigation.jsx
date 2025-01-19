import { Link, NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={css.navBar}>
            <Link to="/" className={css.logo}>
                <span className={css.logoTravel}>Travel</span>
                <span className={css.logoTrucks}>Trucks</span>
            </Link>
            <ul className={css.navItems}>
                <li className={css.navItem}>
                    <NavLink className={css.navLink} to="/">
                        Home
                    </NavLink>
                </li>
                <li className={css.navItem}>
                    <NavLink className={css.navLink} to="/catalog" end>
                        Catalog
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
