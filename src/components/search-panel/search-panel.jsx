import { Component } from 'react/cjs/react.production.min';
import classes from './search-panel.module.css';

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
  }

  inputHandler = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUpdateSearch(term);
  };

  render() {
    return (
      <input
        type="text"
        className={`form-control ${classes['search-input']}`}
        placeholder="Найти сотрудника"
        value={this.state.term}
        onChange={this.inputHandler}
      />
    );
  }
}

export default SearchPanel;
