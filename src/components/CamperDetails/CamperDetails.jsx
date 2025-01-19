import css from './CamperDetails.module.css';
import { addSpace } from '../../utils/stringUtils';
import { filterTypeOptions } from '../../utils/constants';

const CamperDetails = ({ camper }) => {
  const camperType = filterTypeOptions.find(
    option => option.key === camper.form
  );
  return (
    <div className={css.detailsContainer}>
      <h4 className={css.detailsContainerTitle}>Vehicle details</h4>
      <ul className={css.detailsItems}>
        <li className={css.detailsItem}>
          <span>Form</span> {camperType ? camperType.label : camper.form}
        </li>
        <li className={css.detailsItem}>
          <span>Length</span> {addSpace(camper.length)}
        </li>
        <li className={css.detailsItem}>
          <span>Width</span> {addSpace(camper.width)}
        </li>
        <li className={css.detailsItem}>
          <span>Height</span> {addSpace(camper.height)}
        </li>
        <li className={css.detailsItem}>
          <span>Tank</span> {addSpace(camper.tank)}
        </li>
        <li className={css.detailsItem}>
          <span>Consumption</span> {camper.consumption}
        </li>
      </ul>
    </div>
  );
};

export default CamperDetails;
