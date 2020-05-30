import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class Payment extends Component {
  render() {
    return (
        <WebView
          source={{ uri: 'https://pag.ae/7W3ViuXYR' }}
        />
    );
  }
}