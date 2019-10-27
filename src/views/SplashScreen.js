import React, { Component } from 'react'
import { View, Image, StyleSheet, AsyncStorage } from 'react-native'
import LoginImage from '../assets/med_logo.png'
import { setData } from '../store/actions'
import { connect } from 'react-redux'

class SplashScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    ;(async () => {
      await AsyncStorage.getItem('user').then(value => {
        if (value) {
          this.props.setData(JSON.parse(value))
          this.props.navigation.replace('Dashboard')
        } else {
          this.props.navigation.replace('Login')
        }
      })
    })()
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: '#F5FCFF'
        }}
      >
        <View style={styles.container}>
          <Image source={LoginImage} />
        </View>
      </View>
    )
  }
}

mapDispatchToProps = dispatch => {
  return {
    setData: user => {
      dispatch(setData(user, []))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SplashScreen)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
