import {Component} from 'react'
import classes from './app.module.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../emplyees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

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


 onDelete = id => {
    this.setState(state => ({
      data: state.data.filter(employee => employee.id !== id)
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

      <EmployeesList employees={data} onDelete={this.onDelete}/>
      <EmployeesAddForm />
    </div>
  );
}
};

export default App;
