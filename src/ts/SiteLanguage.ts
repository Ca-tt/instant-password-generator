import { reactive } from "vue"
import { supportedLanguages, siteContent } from "@data/languagesData"

/** keep language list, site content, change languages */
export class SiteLanguage {
  constructor() {
    this.supportedLanguages = supportedLanguages
    this.siteContent = siteContent

    /* languages */
    this.defaultLanguage = "Russian"
    this.activeLanguage = "Russian"
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
}

export const siteLanguage = reactive(new SiteLanguage())
