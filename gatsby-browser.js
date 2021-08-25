import * as React from 'react';
import { PreviewStoreProvider } from 'gatsby-source-prismic';
import './src/styles/global.css';

export const wrapRootElement = ({ element }) => <PreviewStoreProvider>{element}</PreviewStoreProvider>;
