import React from 'react';
import Head from 'next/head';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../lib/store';

import '../styles/reset.css';
import '../styles/fonts.css';
import '../styles/global.css';
import '../styles/helpers.css';
import '../styles/forms.css';
import '../styles/tables.css';
import '../styles/animations.css';

import StyledApp from './_app.css.js';

class App extends React.Component {
  state = {};

  year = () => {
    const currentYear = new Date().getFullYear();

    if (currentYear > 2022) {
      return `2022-${currentYear}`;
    }

    return currentYear;
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <StyledApp>
        <Head>
          <title>Valorem Options</title>
        </Head>
        <ReduxProvider store={store}>
          <Component {...pageProps} />
        </ReduxProvider>
        <footer>
          <p>&copy; {this.year()}, Alcibiades Capital LLC. All rights reserved.</p>
        </footer>
      </StyledApp>
    );
  }
}

App.propTypes = {
  // prop: PropTypes.string.isRequired,
};

export default App;
