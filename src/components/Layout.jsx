/* eslint no-unused-expressions: 0 */
/* eslint react/destructuring-assignment: 0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, Global, css } from '@emotion/react';
import '@reach/skip-nav/styles.css';

import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';
import { theme, reset } from '../styles';

import 'typeface-lora';
import 'typeface-source-sans-pro';

const globalStyle = css`
  ${reset}
  h1, h2, h3, h4, h5, h6 {
    color: ${theme.colors.black};
  }
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    color: ${theme.colors.darkBlue};
    background-color: ${theme.colors.bg};
  }
  ::selection {
    color: ${theme.colors.bg};
    background-color: ${theme.colors.primary};
  }
  a {
    color: ${theme.colors.primary};
    transition: all 0.4s ease-in-out;
    text-decoration: none;
    font-weight: 700;
    font-style: italic;
  }
  @media (max-width: ${theme.breakpoints.m}) {
    html {
      font-size: 16px !important;
    }
  }
  @media (max-width: ${theme.breakpoints.s}) {
    h1 {
      font-size: 2.369rem !important;
    }
    h2 {
      font-size: 1.777rem !important;
    }
    h3 {
      font-size: 1.333rem !important;
    }
    h4 {
      font-size: 1rem;
    }
    h5 {
      font-size: 0.75rem !important;
    }
    h6 {
      font-size: 0.563rem !important;
    }
  }
`;

const PureLayout = ({ children, data, customSEO }) => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyle} />
    {!customSEO && <SEO />}
    {children}
  </ThemeProvider>
);

class Layout extends Component {
  render() {
    return (
      <PureLayout {...this.props}>
        <Header />
        {this.props.children}
        <Footer />
      </PureLayout>
    );
  }
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};

PureLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  customSEO: PropTypes.bool,
};

PureLayout.defaultProps = {
  customSEO: false,
};
