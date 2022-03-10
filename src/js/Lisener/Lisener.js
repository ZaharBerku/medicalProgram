export default class Lisener {
    static render(element, action, fun) {
      document.querySelector(element).addEventListener(action, (event) => fun(event.target, event))
    }
  }