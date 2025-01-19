import css from './Loader.module.css';
import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className={css.loader}>
      <ThreeDots color={'#E44848'} height={80} width={80} />
    </div>
  );
};

export default Loader;
