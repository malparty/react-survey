import { useTranslation } from 'react-i18next';

const LanguageSwitch = () => {
  const { t, i18n } = useTranslation();
  const languages = ['en', 'fr'];

  const changeLanguage = (language: string): void => {
    i18n.changeLanguage(language);
  };

  const activeClass = (language: string): string => {
    return language === i18n.language ? 'language-switch__link--active' : '';
  };

  return (
    <ul className="language-switch">
      {languages.map((language) => {
        return (
          <li key={language}>
            <a
              className={`language-switch__link ${activeClass(language)}`}
              href={`#${language}`}
              onClick={() => {
                changeLanguage(language);
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
