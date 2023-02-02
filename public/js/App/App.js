var _App_children;
import Component from '../Component.js';
class App extends Component {
    constructor(parentElement) {
        super(parentElement, 'app-container');
        _App_children.set(this, void 0);
    }
    render() {
        super.render();
    }
}
_App_children = new WeakMap();
