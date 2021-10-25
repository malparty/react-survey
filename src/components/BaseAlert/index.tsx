import React from 'react';
import errorIcon from '@assets/images/icons/icon-error.svg';
import { useTranslation } from 'react-i18next';

interface Props {
  children: React.ReactNode;
}

export const MESSAGE_TEST_ID = 'base-alert-message';

const BaseAlert = (props: Props) => {
  const { t } = useTranslation();

  return (
    <div className="base-alert alert alert-dark">
      <div className="base-alert__icon">
        <img src={errorIcon} alt={t('base_alert.error_icon_alt')} />
      </div>
      <div className="base-alert__content">
        <h5 className="base-alert__content-title">{t('base_alert.error_title')}</h5>
        <div className="base-alert__content-message" data-test-id={MESSAGE_TEST_ID}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default BaseAlert;
