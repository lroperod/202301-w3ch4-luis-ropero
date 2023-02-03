import Component from '../Component.js';

export default class Header extends Component {
  #text: string;
  constructor(parentElement: HTMLElement, text: string) {
    super(parentElement, 'header');
    this.#text = text;
  }

  render(): void {
    super.render();
    this.element.innerHTML = `<h1>${this.#text}<h1>`;
  }
}
