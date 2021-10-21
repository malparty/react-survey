import React, { PureComponent } from 'react';
import errorIcon from '@assets/images/icons/icon-error.svg';

interface Props {
  children: React.ReactNode;
}

export default class BaseAlert extends PureComponent<Props> {
  render() {
    return (
      <div className="base-alert alert alert-dark">
        <div className="base-alert__icon">
          <img src={errorIcon} alt="Error icon" />
        </div>
        <div className="base-alert__content">
          <h5 className="base-alert__content-title">Error</h5>
          <div className="base-alert__content-message" data-test-id="base-alert-message">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
