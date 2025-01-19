import { useOutletContext } from 'react-router-dom';
import css from './CamperFeatures.module.css';
import CamperEquipment from '../CamperEquipment/CamperEquipment';
import CamperDetails from '../CamperDetails/CamperDetails';

const CamperFeatures = () => {
    const { camper } = useOutletContext();

    return (
        <div className={css.featuresContainer}>
            <CamperEquipment camper={camper} />
            <CamperDetails camper={camper} />
        </div>
    );
};

export default CamperFeatures;
