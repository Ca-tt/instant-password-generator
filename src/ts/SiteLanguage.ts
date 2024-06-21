import { reactive } from "vue"
import { supportedLanguages, siteContent, metaData } from "@data/languagesData"
import { useRouter } from "vue-router"

/** contains language list, site content, change languages */
export class SiteLanguage {
  constructor() {
    this.supportedLanguages = supportedLanguages
    this.siteContent = siteContent
    this.metaData = metaData

    /* languages */
    this.defaultLanguage = "en"
    this.activeLanguage = "en"
  }

  getActiveLanguage() {
    return this.activeLanguage
  }

  updateActiveLanguage(newLanguage) {
    this.activeLanguage = newLanguage
  }

  extractText(key: string) {
    return this.siteContent[key][this.activeLanguage]
  }

  extractMetaData(key: string) {
    return this.medataData[key][this.activeLanguage]
  }

  /** updates meta data before heading to next url */
  updateMetaData() {
    /* titles */
    document.title = this.metaData["pageTitle"][this.activeLanguage]
    document
    .querySelector("meta[property='og:title']")
    .setAttribute("content", this.metaData["pageTitle"][this.activeLanguage])
    document
    .querySelector("meta[name='twitter:title']")
    .setAttribute("content", this.metaData["pageTitle"][this.activeLanguage])

    /* descriptions */
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", this.metaData["description"][this.activeLanguage])
    document
      .querySelector("meta[property='og:description']")
      .setAttribute("content", this.metaData["description"][this.activeLanguage])
    document
      .querySelector("meta[name='twitter:description']")
      .setAttribute("content", this.metaData["description"][this.activeLanguage])

    /* keywords */
    document
      .querySelector("meta[name='keywords']")
      .setAttribute("content", this.metaData["keywords"][this.activeLanguage])
  }
}

export const siteLanguage = reactive(new SiteLanguage())
