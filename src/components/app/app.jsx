import {Component} from 'react'

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../emplyees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import classes from './app.module.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [
        { name: 'John C.', salary: 800, increase: false, id: 1 },
        { name: 'Alex M.', salary: 3000, increase: true, id: 2 },
        { name: 'Carl W.', salary: 5000, increase: false, id: 3 },
      ]
    }
  }

  addItem = (employee) => {
    this.setState((state) => ({
      data: [employee, ...state.data]
    }))

  }

 deleteItem = id => {
    this.setState(({data}) => ({
      data: data.filter(employee => employee.id !== id)
    }))
  }

  render() {

    const {data} = this.state

    return (
      <div className={classes.app}>
      <AppInfo />

      <div className={classes['search-panel']}>
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList employees={data} onDelete={this.deleteItem}/>
      <EmployeesAddForm onAddEmployee={this.addItem}/>
    </div>
  );
}
};

export default App;
