import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getRouteFromUrl(url: URL, lang: string) {
  const path = url.pathname;
  // Remove language prefix if exists
  const pathWithoutLang = path.replace(/^\/(en|zh)\//, '/');
  return lang === 'en' ? pathWithoutLang : `/${lang}${pathWithoutLang}`;
}
