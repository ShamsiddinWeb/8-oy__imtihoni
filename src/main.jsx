import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";  
const App = lazy(() => import("./App.jsx"));
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./context/index.js";
import SuspanseLoading from "./components/SuspanseLoading/SuspanseLoading.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<SuspanseLoading />}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
