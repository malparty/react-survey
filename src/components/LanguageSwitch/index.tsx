import { supportedLanguages } from '@src/i18n';
import { useTranslation } from 'react-i18next';

const LanguageSwitch = () => {
  const { t, i18n } = useTranslation();

  const activeClass = (language: string): string => {
    return language === i18n.language ? 'language-switch__link--active' : '';
  };

  return (
    <ul className="language-switch">
      {supportedLanguages.map((language) => {
        return (
          <li key={language}>
            <a
              className={`language-switch__link ${activeClass(language)}`}
              href={`#${language}`}
              onClick={() => {
                i18n.changeLanguage(language);
              }}
            >
              {t(`language_switch.${language}`)}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default LanguageSwitch;
