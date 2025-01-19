import { useOutletContext } from 'react-router-dom';
import css from './CamperReviews.module.css';

const CamperReviews = () => {
  const { camper } = useOutletContext();

  return (
    <div className={css.reviewsContainer}>
      {camper.reviews.map((review, index) => (
        <div key={index} className={css.review}>
          <div className={css.reviewerInfo}>
            <div className={css.avatar}>
              <span>{review.reviewer_name.charAt(0)}</span>
            </div>
            <div>
              <h4 className={css.reviewerName}>{review.reviewer_name}</h4>
              <div className={css.rating}>
                {[...Array(5)].map((star, i) => (
                  <span
                    key={i}
                    className={`icon icon-star ${css.starIcon} ${
                      i < review.reviewer_rating ? css.filledStar : ''
                    }`}
                    aria-hidden="true"
                  ></span>
                ))}
              </div>
            </div>
          </div>
          <p className={css.comment}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default CamperReviews;
