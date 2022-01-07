import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: this.props.increase,
    };
  }

  increaseHandler = () => {
    this.setState(({ increase }) => ({
      increase: !increase,
    }));
  };

  removeEmployee = () => {
    console.log('remove');
  };

  render() {
    const { name, salary } = this.props;
    const { increase } = this.state;
    const itemClassName = `list-group-item d-flex justify-content-between ${
      increase ? 'increase' : ''
    }`;

    return (
      <li className={itemClassName}>
        <span className="list-group-item-label">{name}</span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={salary + '$'}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            className="btn-cookie btn-sm"
            type="button"
            onClick={this.increaseHandler}
          >
            <i className="fas fa-cookie"></i>
          </button>
          <button
            className="btn-trash btn-sm"
            type="button"
            onClick={this.removeEmployee}
          >
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
