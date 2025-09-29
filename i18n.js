// Simple i18n loader using JSON catalogs. Keys mirror UI texts.
// Persist selected language in localStorage under key 'lang'.

(function() {
  const DEFAULT_LANG = 'en';
  const STORAGE_KEY = 'lang';

  const state = {
    lang: DEFAULT_LANG,
    catalog: {},
    listeners: new Set(),
  };

  function getStoredLang() {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      return v || DEFAULT_LANG;
    } catch {
      return DEFAULT_LANG;
    }
  }

  async function loadCatalog(lang) {
    try {
      const res = await fetch(`languages/${lang}.json`, { cache: 'no-cache' });
      if (!res.ok) throw new Error('catalog fetch failed');
      const json = await res.json();
      return json;
    } catch (e) {
      if (lang !== DEFAULT_LANG) {
        // Fallback to default
        return loadCatalog(DEFAULT_LANG);
      }
      return {};
    }
  }

  function translateString(key, defaultText) {
    if (state.catalog && Object.prototype.hasOwnProperty.call(state.catalog, key)) {
      return state.catalog[key];
    }
    return defaultText != null ? defaultText : key;
  }

  function translateDOM(root = document) {
    const elements = root.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const targetAttr = el.getAttribute('data-i18n-attr');
      const def = el.getAttribute('data-i18n-default') || el.textContent;
      const translated = translateString(key, def);
      if (targetAttr) {
        el.setAttribute(targetAttr, translated);
      } else {
        el.textContent = translated;
      }
    });
  }

  async function setLanguage(lang) {
    state.lang = lang;
    state.catalog = await loadCatalog(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
    translateDOM(document);
    state.listeners.forEach(fn => {
      try { fn(lang); } catch {}
    });
  }

  function onLanguageChange(listener) {
    state.listeners.add(listener);
    return () => state.listeners.delete(listener);
  }

  // Expose minimal API
  window.i18n = {
    t: translateString,
    setLanguage,
    getLanguage: () => state.lang,
    onChange: onLanguageChange,
    translateDOM,
  };

  // Boot
  document.addEventListener('DOMContentLoaded', async () => {
    const initial = getStoredLang();
    await setLanguage(initial);
    // Wire radio buttons if present
    const radios = document.querySelectorAll('input[name="language"][type="radio"]');
    if (radios && radios.length) {
      radios.forEach(r => {
        r.checked = r.value === state.lang;
        r.addEventListener('change', (e) => {
          if (e.target.checked) {
            setLanguage(e.target.value);
          }
        });
      });
    }
  });
})();


