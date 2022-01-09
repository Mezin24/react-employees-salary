import { Component } from 'react/cjs/react.production.min';

import './app-filter.css';

class AppFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
    };
  }

  onClearFilter = () => {
    this.props.onUpdateFilter('');
    this.setState({
      filter: '',
    });
  };

  onUpdateFilter = (e) => {
    const filter = e.target.getAttribute('data-filter');
    this.props.onUpdateFilter(filter);
    this.setState({
      filter,
    });
  };

  render() {
    const { filter } = this.state;

    return (
      <div className="btn-group">
        <button
          className={`btn btn${filter === '' ? '' : '-outline'}-light`}
          type="button"
          onClick={this.onClearFilter}
        >
          Все сотрудники
        </button>
        <button
          className={`btn btn${filter === 'increase' ? '' : '-outline'}-light`}
          type="button"
          onClick={this.onUpdateFilter}
          data-filter="increase"
        >
          Сотрудники на повышение
        </button>
        <button
          className={`btn btn${filter === 'moreThen' ? '' : '-outline'}-light`}
          type="button"
          onClick={this.onUpdateFilter}
          data-filter="moreThen"
        >
          З/П больше 1000$
        </button>
      </div>
    );
  }
}

export default AppFilter;
