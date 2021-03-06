import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {store} from './store/store';
import { Provider } from 'react-redux';
import {createMuiTheme} from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import * as serviceWorker from './serviceWorker';
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#9b0000',
        },
        secondary: {
            main: '#660000',
        },
    },
});
ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
     <MuiThemeProvider theme={theme}>
        <App />
     </MuiThemeProvider>   
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

