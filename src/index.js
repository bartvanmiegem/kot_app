import 'babel-polyfill';

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  Image,
  Picker,
  Slider,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { backgroundContainer, backgroundStyle, centerStyle, inputLogoStyle, errorTextStyle } from './styles';
import LargeButton from './components/largeButton';

const logoCompany = require('../assets/logoCompany.png');
const background = require('../assets/background.jpg');
const logoUsername = require('../assets/logoUsername.png');

class InputField extends Component {
  static propTypes = {
    children: PropTypes.node,
    placeholder: PropTypes.string.isRequired
  }

  static styles = StyleSheet.create({
    inputContainer: {
      borderWidth: 1,
      borderBottomColor: '#FFF',
      borderColor: 'transparent',
      flexDirection: 'row'
    },
    input: {
      backgroundColor: 'transparent',
      borderBottomColor: '#FFF',
      flex: 0.8,
      fontSize: 14
    },
    whiteFont: {
      color: '#FFF'
    }
  });

  render () {
    const { styles } = this.constructor;
    const { children, placeholder, ...otherProps } = this.props;
    return (
      <View>
        <View style= {styles.inputContainer}>
          {children}
          <TextInput style={[ styles.input, styles.whiteFont ]} placeholder={placeholder} placeholderTextColor='#CCC' {...otherProps} />
        </View>
      </View>
    );
  }
}

export default class kotApp extends Component {
  static styles = StyleSheet.create({

    logoCompany: {
      height: 100,
      width: 100
    },
    header: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 0.4,
      backgroundColor: 'transparent'
    },
    inputs: {
      marginTop: 10,
      marginBottom: 10,
      flex: 0.60
    },
    signinContainer: {
      marginTop: 50,
      flex: 0.15
    },
    signupContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 0.15
    },
    greyFont: {
      color: '#D8D8D8'
    },

    inputContainer: {
      borderWidth: 1,
      borderBottomColor: '#FFF',
      borderColor: 'transparent',
      flexDirection: 'row'
    },
    input: {
      height: 50,
      color: '#FFF',
      backgroundColor: 'transparent',
      borderBottomColor: '#FFF',
      flex: 0.8,
      fontSize: 14
    },
    whiteFont: {
      color: '#FFF'
    },
    textLeft: {
      flex: 0.3,
      height: 25,
      width: 25,
      marginLeft: 30,
      marginRight: 20
    }
  })
  constructor (props) {
    super(props);
    this.state = {};
  }
  render () {
    const { styles } = this.constructor;
    return (
      <View style={backgroundContainer}>
          <Image style={backgroundStyle} source={background} resizeMode='cover'/>
          <View style={styles.header}>
            <Image style={styles.logoCompany} source={logoCompany} resizeMode='contain'/>
          </View>
          <Text style={{ fontSize: 25, paddingLeft: 20 }}>Kot zoeken</Text>
          <View style={styles.inputs}>
            <InputField placeholder='Stad'>
              <View style={centerStyle}>
                <Image style={[ inputLogoStyle, { tintColor: 'white' } ]} source={logoCompany} resizeMode='contain'/>
              </View>
            </InputField>
            <View style= {styles.inputContainer}>
              <View style={centerStyle}>
                <Image style={[ inputLogoStyle, { tintColor: 'white' } ]} source={logoCompany} resizeMode='contain'/>
              </View>
              <Picker
                style={styles.input}
                selectedValue={this.state.language}
                onValueChange={(lang) => this.setState({ language: lang })}>
                <Picker.Item label='Schoonmeersen' value='Schoonmeersen' />
                <Picker.Item label='Artevelde' value='Artevelde' />
              </Picker>
            </View>
            <View style= {styles.inputContainer}>
              <View style={[ centerStyle, { flex: 0.2 } ]}>
                <Text style={{ color: 'white' }}>Straal:</Text>
              </View>
              <Slider style={styles.input} minimumValue={0} maximumValue={5}/>
            </View>
            <View style={styles.signinContainer}>
              <LargeButton text={'Zoek'}/>
          </View>
          </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('kotApp', () => kotApp);
