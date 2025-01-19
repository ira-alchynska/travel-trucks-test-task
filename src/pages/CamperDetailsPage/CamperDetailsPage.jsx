import { useEffect, useState } from 'react';
import css from './CamperDetailsPage.module.css';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchDetails } from '../../api-trucks';
import BookingForm from '../../components/BookingForm/BookingForm';
import RatingLocationInfo from '../../components/RatingLocationInfo/RatingLocationInfo';
import Loader from '../../components/Loader/Loader';

const CamperDetailsPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [camper, setCamper] = useState(null);

  useEffect(() => {
    const fetchCamperDetails = async () => {
      try {
        const data = await fetchDetails(id);
        setCamper(data);
      } catch (error) {
        console.error('Error fetching camper details:', error);
      }
    };
    fetchCamperDetails();
  }, [id]);

  if (!camper) {
    return <Loader />;
  }

  return (
    <div className={css.camperDetailsContainer}>
      <div className={css.camperDetailsInfo}>
        <div className={css.detailsHeaderFull}>
          <div className={css.detailsHeader}>
            <h1 className={css.name}>{camper.name}</h1>
            <RatingLocationInfo
              rating={camper.rating}
              reviewsCount={camper.reviews.length}
              location={camper.location}
            />
          </div>
          <div className={css.price}>
            <span>€{camper.price.toFixed(2)}</span>
          </div>
        </div>
        <div className={css.imageGallery}>
          {camper.gallery.map((image, index) => (
            <img
              className={css.image}
              key={index}
              src={image.thumb}
              alt={`Camper ${camper.name} ${index + 1}`}
            />
          ))}
        </div>
        <p className={css.description}>{camper.description}</p>
      </div>
      <div className={css.detailsTabs}>
        <Link
          to="features"
          className={`${css.detailsTab} ${
            location.pathname.endsWith('features') ? css.activeTab : ''
          }`}
        >
          Features
        </Link>
        <Link
          to="reviews"
          className={`${css.detailsTab} ${
            location.pathname.endsWith('reviews') ? css.activeTab : ''
          }`}
        >
          Reviews
        </Link>
      </div>

      <div className={css.tabsContent}>
        <Outlet context={{ camper }} />
        <BookingForm />
      </div>
    </div>
  );
};

export default CamperDetailsPage;
