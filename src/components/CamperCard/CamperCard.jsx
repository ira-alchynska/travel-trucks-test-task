import css from './CamperCard.module.css';
import { trimDescription } from '../../utils/stringUtils';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite, selectFavorites } from '../../redux/favoritesSlice';
import { Link } from 'react-router-dom';
import RatingLocationInfo from '../RatingLocationInfo/RatingLocationInfo';
import CamperEquipment from '../CamperEquipment/CamperEquipment';

const placeholderImage = 'https://via.placeholder.com/500x750?text=No+Photo';

const CamperCard = ({ camper }) => {
    const dispatch = useDispatch();
    const favorites = useSelector(selectFavorites);
    const isFavorite = favorites[camper.id];

    const handleFavoriteClick = () => {
        dispatch(toggleFavorite(camper.id));
    };

    return (
        <li className={css.card}>
            <img
                className={css.image}
                src={
                    camper.gallery[0].thumb
                        ? camper.gallery[0].thumb
                        : placeholderImage
                }
            />
            <div className={css.details}>
                <div className={css.cardHeader}>
                    <div className={css.namePrice}>
                        <h1 className={css.name}>{camper.name}</h1>
                        <div className={css.price}>
                            <span>€{camper.price.toFixed(2)}</span>
                            <button
                                onClick={handleFavoriteClick}
                                className={css.favoriteBtn}
                            >
                                <span
                                    className={`icon icon-heart ${
                                        css.heartIcon
                                    } ${isFavorite ? css.favorite : ''}`}
                                    aria-hidden="true"
                                ></span>
                            </button>
                        </div>
                    </div>
                    <RatingLocationInfo
                        rating={camper.rating}
                        reviewsCount={camper.reviews.length}
                        location={camper.location}
                    />
                </div>
                <p className={css.description}>
                    {trimDescription(camper.description, 60)}
                </p>
                <CamperEquipment camper={camper} />
                <Link
                    to={`/catalog/${camper.id}/features`}
                    className={css.showMoreBtn}
                >
                    Show more
                </Link>
            </div>
        </li>
    );
};

export default CamperCard;
