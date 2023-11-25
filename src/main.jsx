import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'
import { store } from './RTK/app/store.js'
import { RouterProvider } from "react-router-dom";
import router from './routes/index.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
