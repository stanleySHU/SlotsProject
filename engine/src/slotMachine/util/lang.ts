import * as QueryString from '../../util/querystring';

export enum Languages {
    English = "en",
    Chinese = "cs",
    Vietnamese = "vn",
    Thai = "th",
    Khmer = "kh", // Cambodia
    Indonesian = "id",
    Korean = "kr",
    Japanese = "jp"
}

export function configureLanguage(): Languages {
    let lang: Languages = QueryString.getParameter('lang', Languages.English) as Languages;
    switch (true) {
      case (lang.indexOf("us") >= 0):
      case (lang.indexOf("en") >= 0): lang = Languages.English; break;
      case (lang.indexOf("cn") >= 0):
      case (lang.indexOf("zh") >= 0):
      case (lang.indexOf("zn") >= 0):
      case (lang.indexOf("cs") >= 0): lang = Languages.Chinese; break;
      case (lang.indexOf("th") >= 0): lang = Languages.Thai; break;
      case (lang.indexOf("vi") >= 0):
      case (lang.indexOf("vn") >= 0): lang = Languages.Vietnamese; break;
      case (lang.indexOf("ko") >= 0):
      case (lang.indexOf("kr") >= 0): lang = Languages.Korean; break;
      case (lang.indexOf("km") >= 0):
      case (lang.indexOf("kh") >= 0): lang = Languages.Khmer; break;
      case (lang.indexOf("id") >= 0): lang = Languages.Indonesian; break;
      case (lang.indexOf("ja") >= 0):
      case (lang.indexOf("jp") >= 0): lang = Languages.Japanese; break;
      default: lang = Languages.English;
    }
    return lang;
}