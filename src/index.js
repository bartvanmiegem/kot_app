import 'babel-polyfill';

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  Dimensions,
  Image,
  Picker,
  ScrollView,
  Slider,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View
} from 'react-native';
import { backgroundContainer, backgroundStyle, centerStyle, inputLogoStyle } from './styles';
import LargeButton from './components/largeButton';
const { height } = Dimensions.get('window');

const logoCompany = require('../assets/logoCompany.png');
const background = require('../assets/background.jpg');
const campussen = {
  Brussel: [
    'Vrije Universiteit Brussel'
  ],
  Gent: [
    'Arteveldehogeschool, Brusselsepoortstraat',
    'Arteveldehogeschool, Hoogpoort',
    'Arteveldehogeschool, Kantienberg',
    'Arteveldehogeschool, Kattenberg',
    'Arteveldehogeschool, Leeuwstraat',
    'Arteveldehogeschool, Mariakerke',
    'Arteveldehogeschool, Sint-Amandsberg',
    'Arteveldehogeschool, Sint-Annaplein',
    'Arteveldehogeschool,Goudstraat',
    'Hogeschool Gent, Bijloke',
    'Hogeschool Gent, Hoogpoort',
    'Hogeschool Gent, Ledeganck',
    'Hogeschool Gent, Melle',
    'Hogeschool Gent, Mercator',
    'Hogeschool Gent, Schoonmeersen',
    'Hogeschool Gent, Vesalius',
    'LUCA, School of Arts, Architectuur'
  ]
};

export class InputField extends Component {
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
      flex: 0.8
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
          <TextInput placeholder={placeholder} placeholderTextColor='#CCC' style={[ styles.input, styles.whiteFont ]} {...otherProps} />
        </View>
      </View>
    );
  }
}

export default class kotApp extends Component {

  constructor (props) {
    super(props);
    this.state = { city: 'Gent', radius: 0, klusjes: false };
  }

  static styles = StyleSheet.create({
    logoCompany: {
      height: 100,
      width: 100
    },
    header: {
      paddingTop: 50,
      paddingBottom: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent'
    },
    inputs: {
      marginTop: 10,
      marginBottom: 10,
      flexDirection: 'column'
    },
    signinContainer: {
      marginTop: 50,
      paddingBottom: 100
    },
    signupContainer: {
      justifyContent: 'center',
      alignItems: 'center'
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
      backgroundColor: 'transparent',
      borderBottomColor: '#FFF',
      flex: 0.8
    },
    whiteFont: {
      color: '#FFF'
    },
    textLeft: {
      flex: 0.2,
      height: 25,
      width: 25,
      marginLeft: 30,
      marginRight: 20
    }
  })

  render () {
    const { styles } = this.constructor;
    return (
      <View style={backgroundContainer}>
      <Image resizeMode='cover' source={background} style={backgroundStyle}/>
        <ScrollView style={{ height }}>
          <View style={styles.header}>
            <Image resizeMode='contain' source={logoCompany} style={styles.logoCompany} />
          </View>
          <Text style={{ fontSize: 25, paddingLeft: 20 }}>Kot zoeken</Text>
          <View style={styles.inputs}>
            { /* Stad */ }
            <View style= {styles.inputContainer}>
              <View style={centerStyle}>
                <Image resizeMode='contain' source={logoCompany} style={[ inputLogoStyle, { tintColor: 'white' } ]} />
              </View>
              <Picker
                selectedValue={this.state.city}
                style={[ styles.input, styles.whiteFont ]}
                onValueChange={(city) => this.setState({ city })}>
                <Picker.Item label='Gent' value='Gent' />
                <Picker.Item label='Brussel' value='Brussel' />
              </Picker>
            </View>

            { /* Campus */ }
            </View>
              <View style= {styles.inputContainer}>
                <View style={centerStyle}>
                  <Image resizeMode='contain' source={logoCompany} style={[ inputLogoStyle, { tintColor: 'white' } ]} />
                  </View>
                <Picker
                  selectedValue={this.state.campus}
                  style={[ styles.input, styles.whiteFont ]}
                  onValueChange={(campus) => this.setState({ ...this.state, campus })}>
                  {campussen[this.state.city].map((campus) => {
                    return <Picker.Item label={campus} value={campus} />;
                  })}
                </Picker>
            </View>

            { /* Straal */ }
            <View style= {styles.inputContainer}>
              <View style={[ centerStyle, { flex: 0.2 } ]}>
                <Text style={{ color: 'white' }}>Straal:</Text>
              </View>
              <Slider maximumValue={5} minimumValue={0} style={[ styles.input, { flex: 0.6 } ]} onValueChange={(val) => { this.setState({ ...this.state, radius: val }); }}/>
              <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.whiteFont}>{Math.round(this.state.radius * 10) / 10}/5km</Text>
              </View>
            </View>

            { /* Klusjes */ }
            <View style= {[ styles.inputContainer, { height: 50 } ]}>
              <View style={[ centerStyle, { flex: 0.2 } ]}>
                <Text style={{ color: 'white' }}>Klusjes?</Text>
              </View>
              <View style={[ centerStyle, { justifyContent: 'center', alignItems: 'flex-start', flex: 0.2 } ]} >
                <Switch value={this.state.klusjes} onValueChange={(val) => { this.setState({ ...this.state, klusjes: val }); }}/>
              </View>
              {!this.state.klusjes && <View style={{ flex: 0.6 }}/>}
              {this.state.klusjes && <View style={{ marginBottom: 10, marginLeft: 3, marginRight: 3, borderWidth: 1, borderBottomColor: '#FFF', borderColor: 'transparent', flex: 0.3 }}>
                <TextInput keyboardType='numeric' placeholder={"Van"} placeholderTextColor='#CCC' style={[ styles.input, styles.whiteFont, { borderWidth: 0.5, borderColor: '#0f0f0f', flex: 0.3 } ]}/>
              </View>}
              {this.state.klusjes && <View style={{ marginBottom: 10, marginLeft: 3, marginRight: 3, borderWidth: 1, borderBottomColor: '#FFF', borderColor: 'transparent', flex: 0.3 }}>
                <TextInput keyboardType='numeric' placeholder={"Tot"} placeholderTextColor='#CCC' style={[ styles.input, styles.whiteFont ]}/>
              </View>}
            </View>

            <View style={styles.signinContainer}>
              <LargeButton text={'Zoek'} onPress={() => {}}/>
            </View>
        </ScrollView>
      </View>
    );
  }
}

/*
return (
  <View style={backgroundContainer}>

      <Image style={backgroundStyle} source={background} resizeMode='cover'/>
      <ScrollView style={{ height: 10 }}>
        <Text>AAA</Text>
        <Text>AAA</Text>
        <Text>AAA</Text>
        <Text>AAA</Text>
        <Text>AAA</Text>
        <Text>AAA</Text>
        <Text>AAA</Text>
      </ScrollView>
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
            style={[ styles.input, styles.whiteFont ]}
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
          <LargeButton text={'Zoek'} onPress={() => {}}/>
        </View>
      </View>
  </View>
);*/

AppRegistry.registerComponent('kotApp', () => kotApp);
