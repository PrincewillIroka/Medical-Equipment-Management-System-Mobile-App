import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid
} from 'react-native'
import LoginImage from '../assets/med_logo.png'
import Dashboard from './Dashboard'

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      TextInputDisableStatus: true
    }
  }

  handleLogin = () => {
    this.props.navigation.replace('Dashboard')
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F5FCFF' }}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={LoginImage} />
          </View>
          <View style={styles.container2}>
            <TextInput style={styles.textInputStyle} placeholder="Email" />
            <TextInput style={styles.textInputStyle} placeholder="Password" />
          </View>
          <View style={styles.loginButtonContainer}>
            {/* <Button title="Login" style={styles.loginButton} /> */}
            <TouchableOpacity
              style={styles.loginButtonStyle}
              activeOpacity={0.5}
              onPress={this.handleLogin}
            >
              <Text style={styles.loginTextStyle}> LOGIN </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignItems: 'stretch'
  },
  imageContainer: {
    alignItems: 'center'
  },
  container2: {
    display: 'flex',
    flexDirection: 'column',
    padding: 30
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    marginTop: 25,
    borderColor: 'transparent',
    borderBottomColor: '#ccc'
  },
  loginButtonStyle: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#00BCD4',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  loginTextStyle: {
    color: '#fff',
    textAlign: 'center'
  }
})
