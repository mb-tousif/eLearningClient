import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import { store } from './RTK/app/store.js'
import { RouterProvider } from "react-router-dom";
import router from './routes/index.jsx'
import ScrollToTop from './ShareCompnt/ScrollNavigation.jsx'
import { ToastContainer } from 'react-toastify';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <ScrollToTop />
      <App />
      <ToastContainer />
    </RouterProvider>
  </Provider>
);
