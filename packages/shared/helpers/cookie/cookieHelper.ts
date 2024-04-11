// import CookieConsentModel from 'shared/components/cookieConsent/CookieConsentModel';

export const SetCookie = (name: string, value: string, exMonths: number) => {
  const d = new Date();

  d.setMonth(d.getMonth() + exMonths);

  const expires: string = "expires=" + d.toUTCString();

  document.cookie = name + "=" + value + ";" + expires + ";path=/";
};

export const GetCookie = (name: string) => {
  const cName = name + "=";
  const ca = document.cookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(cName) === 0) {
      return c.substring(cName.length, c.length);
    }
  }
  return "";
};

export const GetCookieNames = () => {
  let result: string[] = [];
  const ca = document.cookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }

    const cookieName: string = c.split("=")[0];

    result.push(cookieName);
  }

  return result;
};

export const RemoveCookie = (name: string, domain?: string) => {
  let auxDomain: string = "";

  if (!!domain) {
    auxDomain = " domain=" + domain + ";";
  }

  document.cookie = name + "=;" + auxDomain + " max-age=0;";
};

//   GetCookieConsentCookieValue() {
//     const cookieHelper: CookieHelper = new CookieHelper();
//     const value: string = cookieHelper.Get("CookieConsent");
//     let result: CookieConsentModel = { func: false, diag: false };

//     if (value !== "") {
//       result = JSON.parse(value);
//     }

//     return result;
//   }
