import { render } from 'inferno';
import App from './components/App';
import './registerServiceWorker';
import './index.css';

render(<App />, document.getElementById('app'));
