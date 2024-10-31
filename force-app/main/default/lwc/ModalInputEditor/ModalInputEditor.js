
import { api } from 'lwc';
import LightningModal from 'lightning/modal';

export default class EditModal extends LightningModal {
    _content;
    updatedContent;
    label;
    value;
    dataSource;
    @api get content() {
        return this._content;
    }
    set content(contentValue) {
        this._content = JSON.parse(JSON.stringify(contentValue));
        // There will always be only one item, as the design of this modal allows editing of a single item at a time.
        // This can be extended in the future if new use cases are introduced.
        const firstContentItem = this._content[0];
        this.updatedContent = this._content[0];
        const properties = ['label', 'value'];

        properties.forEach((prop) => {
            if (firstContentItem) {
                if (prop === 'label') {
                    const label = firstContentItem[prop];
                    this.label = label ? label.charAt(0).toUpperCase() + label.slice(1) : 'Label';
                } else {
                    this[prop] = firstContentItem[prop];
                }
            } else {
                if (prop === 'label') {
                    this.label = 'Label';
                } else {
                    this[prop] = undefined;
                }
            }
        });
    }

    handleContentChange(e) {
        this.updatedContent.value = e.target.value;
        if (e.key === 'Enter' || e.keyCode === 13) {
            this.close(this.updatedContent);
        }
    }
}
