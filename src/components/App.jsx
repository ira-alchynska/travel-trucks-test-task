import css from './App.module.css';
import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation.jsx';
import { useDispatch } from 'react-redux';
import { getCampers } from '../redux/camperOps';
import CamperFeatures from './CamperFeatures/CamperFeatures.jsx';
import CamperReviews from './CamperReviews/CamperReviews.jsx';
import { Toaster } from 'react-hot-toast';
import Loader from './Loader/Loader.jsx';

const HomePage = lazy(() => import('../pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage.jsx'));
const CamperDetailsPage = lazy(() =>
    import('../pages/CamperDetailsPage/CamperDetailsPage.jsx')
);
const NotFoundPage = lazy(() =>
    import('../pages/NotFoundPage/NotFoundPage.jsx')
);

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCampers());
    }, [dispatch]);

    return (
        <div className={css.container}>
            <Toaster position="top-right" reverseOrder={false} />
            <Navigation />
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/catalog" element={<CatalogPage />} />
                    <Route path="/catalog/:id" element={<CamperDetailsPage />}>
                        <Route path="features" element={<CamperFeatures />} />
                        <Route path="reviews" element={<CamperReviews />} />
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
