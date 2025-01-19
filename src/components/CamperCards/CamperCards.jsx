// import css from './CamperCards.module.css';
// import { useSelector } from 'react-redux';
// import { selectFilteredCampers } from '../../redux/campersSlice';
// import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
// import CamperCard from '../CamperCard/CamperCard';

// const CamperCards = () => {
//   const campers = useSelector(selectFilteredCampers);
//   const currentPage = useSelector(state => state.campers.currentPage);
//   const itemsPerPage = useSelector(state => state.campers.itemsPerPage);

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const visibleCampers = campers.slice(0, endIndex);

//   return (
//     <div className={css.campersContainer}>
//       <ul className={css.campersList}>
//         {visibleCampers.map(camper => (
//           <CamperCard key={camper.id} camper={camper} />
//         ))}
//       </ul>
//       {endIndex < campers.length && <LoadMoreBtn />}
//     </div>
//   );
// };

// export default CamperCards;

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredCampers } from '../../redux/campersSlice';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import CamperCard from '../CamperCard/CamperCard';
import css from './CamperCards.module.css';
import toast from 'react-hot-toast';

const CamperCards = () => {
    const campers = useSelector(selectFilteredCampers);
    const currentPage = useSelector((state) => state.campers.currentPage);
    const itemsPerPage = useSelector((state) => state.campers.itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleCampers = campers.slice(0, endIndex);

    useEffect(() => {
        if (campers.length === 0) {
            toast.error('No campers found for the selected filters!', {
                duration: 4000,
                position: 'top-center',
            });
        }
    }, [campers]);

    return (
        <div className={css.campersContainer}>
            {campers.length === 0 ? (
                <p className={css.noResultsMessage}>
                    No campers match your filters.
                </p>
            ) : (
                <>
                    <ul className={css.campersList}>
                        {visibleCampers.map((camper) => (
                            <CamperCard key={camper.id} camper={camper} />
                        ))}
                    </ul>
                    {endIndex < campers.length && <LoadMoreBtn />}
                </>
            )}
        </div>
    );
};

export default CamperCards;
