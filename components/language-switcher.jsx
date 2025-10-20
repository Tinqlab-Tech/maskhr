import { useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";
import { Navbar, Dropdown, Avatar } from "flowbite-react";
import Image from "next/image";
import es from "/public/flags/es.svg";
import pt from "/public/flags/PT.svg";
import en from "/public/flags/US.svg";
import fr from "/public/flags/FR.svg";
import ar from "/public/flags/AR.png";
import globe from "@/public/images/icons/globe.png";

// The following cookie name is important because it's Google-predefined for the translation engine purpose
const COOKIE_NAME = "googtrans";

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
      const sp = existingLanguageCookieValue.split("/");
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
        case "en": {
          setImage(en);
          break;
        }
        case "es": {
          setImage(es);
          break;
        }
        case "fr": {
          setImage(fr);
          break;
        }
        case "pt": {
          setImage(pt);
          break;
        }
        case "ar": {
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
    setCookie(null, COOKIE_NAME, "/auto/" + lang);

    window.location.reload();
  };

  return (
    <div className="text-center notranslate">
      {/* {languageConfig.languages.map((ld, i) => (
        <div key={ld.name}>
          {currentLanguage === ld.name ||
          (currentLanguage === "auto" &&
            languageConfig.defaultLanguage === ld) ? (
            <span key={`l_s_${ld}`} className="mx-3 text-orange-300 flex gap-2">
              <Image
                src={image}
                alt={"country logo"}
                width={20}
                height={20}
                className="inline"
              />{" "}
              {ld.title}
            </span>
          ) : (
            <a
              key={`l_s_${ld}`}
              onClick={switchLanguage(ld.name)}
              className="mx-3 text-blue-300 cursor-pointer hover:underline flex gap-2"
            >
              <Image
                src={image}
                alt={"country logo"}
                width={20}
                height={20}
                className="inline"
              />{" "}
              {ld.title}
            </a>
          )}
        </div>
      ))} */}
      <Dropdown
        key={`${image}`}
        inline
        className="mx-2 "
        label={
          <Image src={globe} alt={"MaskHr languages"} width={30} height={30} />
        }
      >
        {languageConfig.languages.map((ld, i) => (
          <span key={i}>
            <Dropdown.Item>
              <span
                className="text-sm hover:text-primary-blue hover:text-lg capitalize flex gap-2"
                onClick={switchLanguage(ld.name)}
              >
                {ld.title}
                <Image
                  src={
                    ld.name === "en"
                      ? en
                      : ld.name === "pt"
                        ? pt
                        : ld.name === "fr"
                          ? fr
                          : ld.name === "es"
                            ? es
                            : ld.name === "ar"
                              ? ar
                              : en
                  }
                  alt={ld.name}
                  width={20}
                  height={20}
                  className="inline "
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
