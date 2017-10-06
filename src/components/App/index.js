import { version } from 'inferno'
import Logo from './logo'
import './App.css'

export default () => (
  <div className="App">
    <div className="App-header">
      <Logo width="80" height="80" />
      <h2>{`Welcome to Inferno ${version}`}</h2>
    </div>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
)
