import css from './CatalogPage.module.css';
import CatalogFilter from '../../components/CatalogFilter/CatalogFilter';
import CamperCards from '../../components/CamperCards/CamperCards';

const CatalogPage = () => {
  return (
    <div className={css.catalogContainer}>
      <CatalogFilter />
      <div className={css.campersContainer}>
        <CamperCards></CamperCards>
      </div>
    </div>
  );
};

export default CatalogPage;
