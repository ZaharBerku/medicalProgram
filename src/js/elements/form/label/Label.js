import CreateHTMLElement from '../../CreateHTMLElement.js'

export default class Label extends CreateHTMLElement {
    constructor({ className, id, attribut = '', text = '' }) {
      super(className, id);
      this.attribut = attribut;
      this.text = text
    }
    render(elem, place) {
      this.createLabel()
      this.addElement(elem, place)
    }
    createLabel() {
      this.createElement({
        name: 'label',
        attributes: {
          for: this.attribut,
          innerHTML: this.text,
        }
      })
    }
  }