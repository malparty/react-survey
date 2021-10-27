const useMock = {
  t: (k: string) => {
    return k;
  },
  i18n: {changeLanguage: (language: string) => {}}
};

export const useTranslation = () => useMock;
