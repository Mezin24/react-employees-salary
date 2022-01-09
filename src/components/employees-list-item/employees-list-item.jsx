import './employees-list-item.css';

const EmployeesListItem = (props) => {
  const {
    name,
    salary,
    onDelete,
    onToggleIncrease,
    onToggleRice,
    increase,
    rice,
  } = props;
  const itemClassName = `list-group-item d-flex justify-content-between ${
    increase ? 'increase' : ''
  } ${rice ? 'like' : ''}`;

  return (
    <li className={itemClassName}>
      <span className="list-group-item-label" onClick={onToggleRice}>
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + '$'}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          className="btn-cookie btn-sm"
          type="button"
          onClick={onToggleIncrease}
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button className="btn-trash btn-sm" type="button" onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
