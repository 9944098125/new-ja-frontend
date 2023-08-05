import "./App.css";
import BaseRoutes from "./Routing/routes";
import store from "./Redux/Store/Store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BaseRoutes />
    </Provider>
  );
}

export default App;
