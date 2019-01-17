import React from 'react';
import PropTypes from 'prop-types';

import './vlist.styles.scss';

export class VList extends React.PureComponent {

  static propTypes = {
    sortBy: PropTypes.string,
    data: PropTypes.array,
  }

  render() {
    const { data } = this.props;
    const firstItem = data[0];

    const {
      id,
      company,
      url,
      city,
      picture,
      description,
      phone,
    } = firstItem;

    return (
      <a key={ id } href={ url } target="_blank" className="vList__item">
        <div className="vList__name">{ company }</div>
        <div>{ description }</div>
        <div className="vList__attributes">
          <span className="vList__attr"><span>📇</span>{ id }</span>
          <span className="vList__attr"><span>📞</span>{ phone }</span>
          <span className="vList__attr"><span>📍</span>{ city }</span>
        </div>
        <picture className="vList__picture">
          <img className="vList__img" src={ picture } />
        </picture>
      </a>
    );
  }

}
