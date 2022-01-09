import './app-filter.css';

const AppFilter = (props) => {
  const buttons = [
    { name: 'all', value: 'Все сотрудники' },
    { name: 'rise', value: 'Сотрудники на повышение' },
    { name: 'moreThen', value: 'З/П больше 1000$' },
  ];

  return (
    <div className="btn-group">
      {buttons.map((btn) => {
        const { name, value } = btn;
        const active = props.filter === name;
        const clazz = `btn ${active ? 'btn-light' : 'btn-outline-light'}`;

        return (
          <button
            className={clazz}
            key={name}
            onClick={() => props.onUpdateFilter(name)}
          >
            {value}
          </button>
        );
      })}
    </div>
  );
};

export default AppFilter;
