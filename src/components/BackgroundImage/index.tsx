import React, { PureComponent } from 'react';
import defaultImage from '../../assets/images/default-background.jpg';

export default class BackgroundImage extends PureComponent {
  render() {
    return (
      <div className="background-image">
        <img className="background-image__img" src={defaultImage} role="presentation" alt="" />
      </div>
    );
  }
}
