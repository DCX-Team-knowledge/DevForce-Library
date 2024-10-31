
import { LightningElement, api } from 'lwc'

export default class CrmCpErrorInterface extends LightningElement {
  @api errorMessageBody

  get errorMessageHeader() {
    return 'Error retrieving data'
  }
}
