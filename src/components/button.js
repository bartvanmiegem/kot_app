import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { colors } from '../styles';

export default class Button extends Component {

  static propTypes = {
    disabled: PropTypes.bool,
    style: PropTypes.object,
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
  }

  static styles = StyleSheet.create({
    disabled: {
      opacity: 0.3
    }
  })

  render () {
    const { styles } = this.constructor;
    const { disabled, style, text, onPress } = this.props;
    return (
      <TouchableHighlight onPress={onPress}>
        <View style={[ style.view, disabled && styles.disabled ]}>
          <Text style={style.text}>
            {text}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}
