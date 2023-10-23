import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { Provider } from "react-redux";
import store from './Cart/Store';
function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Header />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
