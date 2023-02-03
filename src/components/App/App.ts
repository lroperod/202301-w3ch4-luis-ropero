import Component from '../Component.js';
import Header from '../Header/Header.js';

export default class App extends Component {
  #children: Component[];

  constructor(parentElement: HTMLElement | null) {
    super(parentElement, 'app-container');
    this.#children = [new Header(this.element, 'My Series')];
  }

  render(): void {
    super.render();
    this.#children.forEach(component => component.render());
  }
}
