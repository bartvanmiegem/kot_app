import { Dimensions, Image, StyleSheet, View } from 'react-native';
import React, { Component, PropTypes } from 'react';
import { colors } from '../styles';

import Button from './button';

export default class LargeButton extends Component {
  render () {
    const customStyleButton = {
      view: {
        paddingTop: 20,
        paddingBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        flex: 1
      },
      text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white'
      }
    };

    return (
      <Button {...this.props} style={customStyleButton}/>
    );
  }
}
