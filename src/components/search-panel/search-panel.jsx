import classes from './search-panel.module.css';

const SearchPanel = () => {
  return (
    <input
      type="text"
      className={`form-control ${classes['search-input']}`}
      placeholder="Найти сотрудника"
    />
  );
};

export default SearchPanel;
