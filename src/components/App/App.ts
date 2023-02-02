import Component from '../Component.js';

class App extends Component {
  #children: Component[];

  constructor(parentElement: HTMLElement | null) {
    super(parentElement, 'app-container');
  }

  render(): void {
    super.render();
  }
}
