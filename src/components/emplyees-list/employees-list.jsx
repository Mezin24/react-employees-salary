import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({ employees, onDelete, onToggleProp }) => {
  return (
    <ul className="app-list list-group">
      {employees.map((employee) => {
        const { id, ...itemProps } = employee;

        return (
          <EmployeesListItem
            // name={employee.name}
            // salary={employee.salary}
            {...itemProps}
            key={id}
            onDelete={() => onDelete(id)}
            onToggleProp={(e) =>
              onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))
            }
          />
        );
      })}
    </ul>
  );
};

export default EmployeesList;
