import './App.css'
import Component1 from './components/Rxjs/Component1'
import Component2 from './components/Rxjs/Component2'
import Gentleman from './pages/Gentleman/context/Gentleman'
import { Provider } from 'react-redux';
import { GentlemanStore } from './redux/store';
import ComponentRedux1 from './components/Redux/ComponentRedux1';

function App() {

  return (
    <div className="App">

      <Provider store={GentlemanStore}>

        <div style={{ border: '1px solid', marginBottom: '20px' }}>
          <h2>Rxjs</h2>
          <Component1 />
          <hr />
          <Component2 />
        </div>

        <div style={{ border: '1px solid', marginBottom: '20px' }}>
          <h2>Context</h2>
          <Gentleman />
        </div>

        <div style={{ border: '1px solid', marginBottom: '20px' }}>
          <h2>Redux</h2>
          <ComponentRedux1 />
        </div>

      </Provider >
    </div>
  )
}

export default App
