import { useDispatch } from 'react-redux';
import css from './LoadMoreBtn.module.css';
import { incrementCurrentPage } from '../../redux/campersSlice';

const LoadMoreBtn = () => {
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch(incrementCurrentPage());
  };

  return (
    <button className={css.loadMoreBtn} onClick={handleLoadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
