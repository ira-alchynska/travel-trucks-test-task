import css from './RatingLocationInfo.module.css';
import { reverseLocation } from '../../utils/stringUtils';

const RatingLocationInfo = ({ rating, reviewsCount, location }) => {
  return (
    <div className={css.ratingLocation}>
      <div className={css.rating}>
        <span
          className={`icon icon-star ${css.starIcon}`}
          aria-hidden="true"
        ></span>
        <span className={css.ratingText}>
          {rating} ({reviewsCount} reviews)
        </span>
      </div>
      <div className={css.location}>
        <span
          className={`icon icon-map ${css.mapIcon}`}
          aria-hidden="true"
        ></span>
        <span>{reverseLocation(location)}</span>
      </div>
    </div>
  );
};

export default RatingLocationInfo;
