import { useEffect, useState } from 'react';
import { parseCookies, setCookie } from 'nookies';
import { Navbar, Dropdown, Avatar } from 'flowbite-react';
import Image from 'next/image';
import es from '/public/flags/es.svg';
import pt from '/public/flags/PT.svg';
import en from '/public/flags/US.svg';
import fr from '/public/flags/FR.svg';
import ar from '/public/flags/AR.png';
import globe from '@/public/images/icons/globe.png';

// The following cookie name is important because it's Google-predefined for the translation engine purpose
const COOKIE_NAME = 'googtrans';

// // We should know a predefined nickname of a language and provide its title (the name for displaying)
// interface LanguageDescriptor {
//   name: string;
//   title: string;
// }

// // The following definition describes typings for JS-based declarations in public/assets/scripts/lang-config.js
// declare global {
//   namespace globalThis {
//     var __GOOGLE_TRANSLATION_CONFIG__: {
//       languages: LanguageDescriptor[];
//       defaultLanguage: string;
//     };
//   }
// }

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState();
  const [languageConfig, setLanguageConfig] = useState();
  const [image, setImage] = useState(en);

  // When the component has initialized, we must activate the translation engine the following way.
  useEffect(() => {
    // 1. Read the cookie
    const cookies = parseCookies();
    const existingLanguageCookieValue = cookies[COOKIE_NAME];

    let languageValue;
    if (existingLanguageCookieValue) {
      // 2. If the cookie is defined, extract a language nickname from there.
      const sp = existingLanguageCookieValue.split('/');
      if (sp.length > 2) {
        languageValue = sp[2];
      }
    }
    // 3. If __GOOGLE_TRANSLATION_CONFIG__ is defined and we still not decided about languageValue, let's take a current language from the predefined defaultLanguage below.
    if (global.__GOOGLE_TRANSLATION_CONFIG__ && !languageValue) {
      languageValue = global.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage;
    }
    if (languageValue) {
      // 4. Set the current language if we have a related decision.
      setCurrentLanguage(languageValue);
      switch (languageValue) {
        case 'en': {
          setImage(en);
          break;
        }
        case 'es': {
          setImage(es);
          break;
        }
        case 'fr': {
          setImage(fr);
          break;
        }
        case 'pt': {
          setImage(pt);
          break;
        }
        case 'ar': {
          setImage(ar);
          break;
        }
        default: {
          setImage(en);
          break;
        }
      }
    }
    // 5. Set the language config.
    if (global.__GOOGLE_TRANSLATION_CONFIG__) {
      setLanguageConfig(global.__GOOGLE_TRANSLATION_CONFIG__);
    }
  }, []);

  // Don't display anything if current language information is unavailable.
  if (!currentLanguage || !languageConfig) {
    return null;
  }

  // The following function switches the current language
  const switchLanguage = (lang) => () => {
    // We just need to set the related cookie and reload the page
    // "/auto/" prefix is Google's definition as far as a cookie name
    setCookie(null, COOKIE_NAME, '/auto/' + lang);

    window.location.reload();
  };

  return (
    <div className="notranslate text-center">
      <Dropdown
        key={`${image}`}
        inline
        className="my-2"
        label={
          <Image src={globe} alt={'MaskHr languages'} width={30} height={30} />
        }
      >
        {languageConfig.languages.map((ld, i) => (
          <span key={i}>
            <Dropdown.Item>
              <span
                className="hover:text-primary-blue flex gap-2 text-sm capitalize hover:text-lg"
                onClick={switchLanguage(ld.name)}
              >
                {ld.title}
                <Image
                  src={
                    ld.name === 'en'
                      ? en
                      : ld.name === 'pt'
                        ? pt
                        : ld.name === 'fr'
                          ? fr
                          : ld.name === 'es'
                            ? es
                            : ld.name === 'ar'
                              ? ar
                              : en
                  }
                  alt={ld.name}
                  width={20}
                  height={20}
                  className="inline"
                />
              </span>
            </Dropdown.Item>
            <Dropdown.Divider />
          </span>
        ))}
      </Dropdown>
    </div>
  );
};

export { LanguageSwitcher, COOKIE_NAME };
