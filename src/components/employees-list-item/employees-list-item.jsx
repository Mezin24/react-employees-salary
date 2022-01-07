import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, salary, increase } = this.props;
    return (
      <li
        className={`list-group-item d-flex justify-content-between ${
          increase ? 'increase' : ''
        }`}
      >
        <span className="list-group-item-label">{name}</span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={salary + '$'}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn-cookie btn-sm" type="button">
            <i className="fas fa-cookie"></i>
          </button>
          <button className="btn-trash btn-sm" type="button">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
