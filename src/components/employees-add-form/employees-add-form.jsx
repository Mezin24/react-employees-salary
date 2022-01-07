import './employees-add-form.css';

const EmployeesAddForm = () => {
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
          id=""
          className="form-control new-post-label"
        />

        <button type="submit" className="btn btn-outline-light">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;