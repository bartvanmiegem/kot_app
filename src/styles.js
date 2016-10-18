import { Dimensions } from 'react-native';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export const colors = {
  // primary: '#FF3A68',
  primary: '#1BA06D',
  secondary: '#FFF',
  navBar: '#7C7C7C',
  sideMenu: '#7C7C7C',
  text: '#FFF',
  error: '#CA3535'
};

export const backgroundContainer = {
  flexDirection: 'column',
  flex: 1,
  backgroundColor: 'transparent'
};

export const backgroundStyle = {
  position: 'absolute',
  left: 0,
  top: 0,
  width: screenWidth,
  height: screenHeight
};

export const centerStyle = {
  alignItems: 'center',
  justifyContent: 'center'
};

export const inputLogoStyle = {
  flex: 0.3,
  height: 25,
  width: 25,
  marginLeft: 30,
  marginRight: 20
};

export const errorContainerStyle = {
  backgroundColor: colors.error,
  position: 'absolute',
  left: 0,
  top: 54,
  right: 0,
  height: 25
};

export const errorTextStyle = {
  textAlign: 'center',
  color: '#FFF',
  fontSize: 14,
  fontWeight: 'bold'
};
