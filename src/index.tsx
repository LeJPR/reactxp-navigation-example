import RX = require('reactxp');
import App = require('./app');

RX.App.initialize(true, true);
RX.UserInterface.setMainView(<App />);
