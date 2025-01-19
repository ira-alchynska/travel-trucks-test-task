import { useEffect } from 'react';
import css from './Banner.module.css';
import { Link } from 'react-router-dom';

const Hero = () => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <>
            <div className={css.hero}>
                <div className={css.heroText}>
                    <h1 className={css.title}>Campers of your dreams</h1>
                    <p className={css.subtitle}>
                        You can find everything you want in our catalog
                    </p>
                    <Link to="/catalog" className={css.buttonLink}>
                        View Now
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Hero;
