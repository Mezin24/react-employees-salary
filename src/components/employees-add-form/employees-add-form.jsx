import { Component } from 'react/cjs/react.production.min';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmitForm = (e) => {
    e.preventDefault();

    const { name, salary } = this.state;

    this.props.onAddEmployee(name, salary);

    this.setState({
      name: '',
      salary: '',
    });
  };

  render() {
    const { name, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmitForm}>
          <input
            type="text"
            placeholder="Как его зовут?"
            className="form-control new-post-label"
            onChange={this.onValueChange}
            name="name"
            value={name}
          />
          <input
            type="number"
            placeholder="З/П в $?"
            className="form-control new-post-label"
            onChange={this.onValueChange}
            name="salary"
            value={salary}
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
