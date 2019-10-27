import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  AsyncStorage
} from 'react-native'
import axios from 'axios'
import { connect } from 'react-redux'
import LoginImage from '../assets/med_logo.png'
import { setData } from '../store/actions'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      TextInputDisableStatus: true,
      errorMessage: '',
      isLoading: false,
      email: '',
      password: '',
      emailError: false,
      passwordError: false
    }
  }

  handleLogin = () => {
    this.setState({
      errorMessage: ''
    })
    let email = this.state.email,
      password = this.state.password
    if (!email) {
      this.setState({ emailError: true })
    } else if (!password) {
      this.setState({ passwordError: true })
    } else {
      this.setState({
        isLoading: true
      })
      axios
        .post('http://192.168.8.103:3000/appLogin', {
          email,
          password
        })
        .then(async response => {
          if (response.data.result === 'success') {
            this.props.setData(
              response.data.user,
              response.data.equipment_repair_requests
            )
            await AsyncStorage.setItem(
              'user',
              JSON.stringify(response.data.user)
            )
            this.props.navigation.replace('Dashboard')
          } else if (
            response.data.result === 'failed' ||
            response.data.result === 'no access'
          ) {
            this.setState({
              errorMessage: 'Invalid Login',
              isLoading: false
            })
          }
        })
        .catch(err => {
          this.setState({
            errorMessage: 'An error occured. Please try again',
            isLoading: false
          })
          console.log(err)
        })
    }
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F5FCFF' }}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={LoginImage} />
          </View>
          <Text
            style={{
              color: 'red',
              textAlign: 'center',
              marginTop: 20
            }}
          >
            {this.state.errorMessage}
          </Text>
          <View style={styles.container2}>
            {this.state.emailError && (
              <Text style={styles.textErrorStyle}>Email cannot be empty</Text>
            )}
            <TextInput
              style={styles.textInputStyle}
              placeholder="Email"
              onChangeText={email =>
                this.setState({
                  emailError: false,
                  email: email,
                  errorMessage: ''
                })
              }
            />
            {this.state.passwordError && (
              <Text style={styles.textErrorStyle}>
                Password cannot be empty
              </Text>
            )}
            <TextInput
              style={styles.textInputStyle}
              placeholder="Password"
              onChangeText={password =>
                this.setState({
                  passwordError: false,
                  password: password,
                  errorMessage: ''
                })
              }
            />
          </View>
          <View style={styles.loginButtonContainer}>
            {/* <Button title="Login" style={styles.loginButton} /> */}
            <TouchableOpacity
              style={styles.loginButtonStyle}
              activeOpacity={0.5}
              onPress={this.handleLogin}
            >
              {this.state.isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={styles.loginTextStyle}> LOGIN </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

mapDispatchToProps = dispatch => {
  return {
    setData: (user, equipmentRequests) => {
      dispatch(setData(user, equipmentRequests))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Login)

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
    marginBottom: 35,
    borderColor: 'transparent',
    borderBottomColor: '#ccc',
    fontSize: 14
  },
  textErrorStyle: {
    color: 'red'
  },
  loginButtonStyle: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#3089f9',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#fff'
  },
  loginTextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16
  }
})
