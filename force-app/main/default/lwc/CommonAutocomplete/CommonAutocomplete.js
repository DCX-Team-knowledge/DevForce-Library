
import { LightningElement, api } from 'lwc'

export default class CommonAutocomplete extends LightningElement {
  @api name = ''
  @api value = ''
  @api placeholder = ''
  @api label = ''
  @api options
  @api disabled
  @api required

  initialized = false

  renderedCallback() {
    if (this.initialized) {
      return
    }
    this.initialized = true

    let listId = this.template.querySelector('datalist').id
    this.template.querySelector('input').setAttribute('list', listId)
  }

  get optionValues() {
    return this.options || []
  }

  handleChange({ target: { value } }) {
    this.dispatchEvent(
      new CustomEvent('change', {
        bubbles: false,
        detail: { value: value, target: this.name },
      })
    )
  }
}
