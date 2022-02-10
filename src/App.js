import './App.css';
import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux'
import store from './app/store'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppRouter />
      </div>
    </Provider>
  );
}

export default App;
