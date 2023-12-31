import { Provider } from "react-redux";
import store from "./store";
import Counter from "./components/Counter";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux Toolkit</h1>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
