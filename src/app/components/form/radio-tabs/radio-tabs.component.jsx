import React from 'react';
import PropTypes from 'prop-types';

import './radio-tabs.styles.scss';

export class RadioTabs extends React.Component {

  static propTypes = {
    name: PropTypes.string,
    sortBy: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func,
  }

  render() {
    return (
      <ul className="radioTabs__root">
        <li className="radioTabs__item">
          <label className="radioTabs__label">
            <input type="radio" />
            { this.props.options[0].label }
            <span className="radioTabs__underline" />
          </label>
        </li>
      </ul>
    );
  }

}
