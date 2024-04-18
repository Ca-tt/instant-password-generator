import type { MessageApiInjection } from 'naive-ui'

export class NaiveModal {
    constructor(modal: MessageApiInjection, text: string, options) {
      this.text = text;
      this.options = options
  
      this._modal = modal
    }
  
    createSuccessModal() {
      this._modal.success(this.text, this.options)
    }

    createInfoModal() {
      this._modal.info(this.text, this.options)
    }

    createWarningModal() {
      this._modal.warning(this.text, this.options)
    }
    
    createErrorModal() {
      this._modal.error(this.text, this.options)
    }
  }