import { LightningElement, api } from 'lwc'

export default class CommonAlerts extends LightningElement {
  _parsedAlerts = null

  @api get alerts() {
    return this._parsedAlerts
  }

  set alerts(alerts) {
    if (!alerts) {
      return
    }

    this._parsedAlerts = alerts.map((alert) => ({
      key: `${alert.alertType}-${alert.message}`,
      message: alert.message,
      classes: `slds-var-m-bottom_xx-small slds-notify slds-notify_alert slds-alert_${
        alert.alertType === 'critical' ? 'error' : alert.alertType
      }`,
      icon: `/apexpages/slds/latest/assets/icons/utility-sprite/svg/symbols.svg#${
        alert.alertType === 'critical' ? 'error' : alert.alertType
      }`,
    }))
  }
}
