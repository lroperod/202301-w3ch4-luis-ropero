export default class Component {
  #element: HTMLElement;
  #parentElement: HTMLElement | null;

  constructor(parentElement: HTMLElement, tag: string, cssClass: string = '') {
    this.#element = document.createElement(tag);
    this.#element.className = cssClass;
    this.#parentElement = parentElement;
  }

  render() {
    this.#parentElement?.appendChild(this.#element);
  }
}
