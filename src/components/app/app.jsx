import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../emplyees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import classes from './app.module.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { name: 'John C.', salary: 800, increase: false, rice: true, id: 1 },
        { name: 'Alex M.', salary: 3000, increase: true, rice: false, id: 2 },
        { name: 'Carl W.', salary: 5000, increase: false, rice: false, id: 3 },
      ],
      term: '',
    };
  }

  addItem = (name, salary) => {
    const uniqid = require('uniqid');

    const newEmployee = {
      name,
      salary,
      increase: false,
      id: uniqid(),
      rice: false,
    };
    this.setState((state) => ({
      data: [newEmployee, ...state.data],
    }));
  };

  deleteItem = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((employee) => employee.id !== id),
    }));
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) =>
        item.id === id ? { ...item, [prop]: !item[prop] } : item
      ),
    }));
  };

  searchEmp = (items, term) => {
    if (term.length === 0) return items;

    return items.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  render() {
    const { data, term } = this.state;
    const employees = data.length;
    const empPremium = data.filter((item) => item.increase).length;
    const visibleData = this.searchEmp(data, term);

    return (
      <div className={classes.app}>
        <AppInfo empTotal={employees} empPremiumTotal={empPremium} />

        <div className={classes['search-panel']}>
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter />
        </div>

        <EmployeesList
          employees={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAddEmployee={this.addItem} />
      </div>
    );
  }
}

export default App;
