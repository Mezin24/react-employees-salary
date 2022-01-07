import { Component } from 'react/cjs/react.production.min';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex">
          <input
            type="text"
            placeholder="Как его зовут?"
            className="form-control new-post-label"
          />
          <input
            type="number"
            placeholder="З/П в $?"
            className="form-control new-post-label"
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
