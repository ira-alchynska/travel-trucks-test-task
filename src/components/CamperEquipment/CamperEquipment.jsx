import css from './CamperEquipment.module.css';

const CamperEquipment = ({ camper }) => {
  return (
    <div className={css.features}>
      {camper.transmission && (
        <div className={css.feature}>
          <span
            className={`icon icon-transmission ${css.featureIcon}`}
            aria-hidden="true"
          ></span>
          <span>
            {camper.transmission.charAt(0).toUpperCase() +
              camper.transmission.slice(1)}
          </span>
        </div>
      )}
      {camper.engine && (
        <div className={css.feature}>
          <span
            className={`icon icon-fuel-pump ${css.featureIcon}`}
            aria-hidden="true"
          ></span>
          <span>
            {camper.engine.charAt(0).toUpperCase() + camper.engine.slice(1)}
          </span>
        </div>
      )}
      {camper.kitchen && (
        <div className={css.feature}>
          <span
            className={`icon icon-cup-hot ${css.featureIcon}`}
            aria-hidden="true"
          ></span>
          <span>Kitchen</span>
        </div>
      )}
      {camper.AC && (
        <div className={css.feature}>
          <span
            className={`icon icon-ac ${css.featureIcon}`}
            aria-hidden="true"
          ></span>
          <span>AC</span>
        </div>
      )}
      {camper.bathroom && (
        <div className={css.feature}>
          <span
            className={`icon icon-droplet ${css.featureIcon}`}
            aria-hidden="true"
          ></span>
          <span>Bathroom</span>
        </div>
      )}
      {camper.TV && (
        <div className={css.feature}>
          <span
            className={`icon icon-tv ${css.featureIcon}`}
            aria-hidden="true"
          ></span>
          <span>TV</span>
        </div>
      )}
      {camper.radio && (
        <div className={css.feature}>
          <span
            className={`icon icon-radio ${css.featureIcon}`}
            aria-hidden="true"
          ></span>
          <span>Radio</span>
        </div>
      )}
    </div>
  );
};

export default CamperEquipment;
