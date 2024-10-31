import { LightningElement, api, track } from 'lwc'

export default class CommonLoadingContainer extends LightningElement {
  @api get centerIllustration() {
    return this.getterCenterIllustration
  }
  set centerIllustration(condition) {
    this.getterCenterIllustration = condition ? true : false
  }
  @api get conditionToShow() {
    return this.getterCondition
  }
  set conditionToShow(condition) {
    this.getterCondition = condition ? condition : false
  }
  @api get statusText() {
    return this.getterText
  }
  set statusText(text) {
    if (text) {
      this.getterText = text
    }
  }
  @api get illustrationConfig() {
    return this.getterConfig
  }
  set illustrationConfig(config) {
    this.getterConfig = config ? config : false
  }
  @api get hasError() {
    return this.getterError
  }
  set hasError(error) {
    this.getterError = error ? true : false
  }
  @track getterCondition
  @track getterText
  @track getterError
  @track getterConfig
  @track getterCenterIllustration
  @api customStatusMessageClass

  get centerHeight() {
    return this.centerIllustration ? 'slds-card maximize-height' : 'slds-card'
  }

  get centerWidth() {
    return this.centerIllustration ? 'center-illustration' : ''
  }

  get statusMessage() {
    return `Loading ${this.statusText}`
  }

  get statusMessageClasses() {
    let classes = ['statusMessage']
    classes.push(
      this.customStatusMessageClass
        ? 'slds-text-body_small'
        : 'slds-text-heading_small'
    )
    return classes.join(' ')
  }
}
