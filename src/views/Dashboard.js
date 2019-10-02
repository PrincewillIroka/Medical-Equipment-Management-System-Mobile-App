import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView
} from 'react-native'
import { BackHandler } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component'

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tableHead: ['S/N', 'Department', 'Complaint', 'No. Required', 'Fixed'],
      tableData: [
        ['1', '2', '3', '4', ''],
        ['a', 'b', 'c', 'd', ''],
        ['1', '2', '3', '4', ''],
        ['a', 'b', 'c', 'd', '']
      ]
    }
  }

  componentDidMount() {
    // BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressed)
  }

  componentWillUnmount() {
    // BackHandler.removeEventListener(
    //   'hardwareBackPress',
    //   this.onBackButtonPressed
    // )
  }

  onBackButtonPressed() {
    // return true
  }

  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`)
  }

  checkIndexIsEven(n) {
    return n % 2 !== 0
  }

  render() {
    const state = this.state
    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>button</Text>
        </View>
      </TouchableOpacity>
    )
    return (
      <View style={styles.container}>
        <View style={styles.breadCrumbContainer}>
          <Text style={styles.firstText}>Department</Text>
          <FontAwesomeIcon icon={faAngleRight} />
          <Text style={styles.secondText}>Biomedical Engineering</Text>
        </View>
        <Text style={styles.ongoingRequestHeaderText}>Ongoing Requests</Text>
        <ScrollView horizontal={true}>
          <View style={styles.tableContainer}>
            <Table borderStyle={{ borderColor: 'transparent' }}>
              <Row
                data={state.tableHead}
                style={styles.head}
                textStyle={styles.text}
              />
              {state.tableData.map((rowData, index) => (
                <TableWrapper
                  key={index}
                  style={[
                    styles.row,
                    styles.option,
                    {
                      backgroundColor: this.checkIndexIsEven(index)
                        ? '#fafafa'
                        : '#fff'
                    }
                  ]}
                >
                  {rowData.map((cellData, cellIndex) => (
                    <Cell
                      key={cellIndex}
                      data={
                        cellIndex === 4 ? element(cellData, index) : cellData
                      }
                      textStyle={styles.text}
                    />
                  ))}
                </TableWrapper>
              ))}
            </Table>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: 16
  },
  breadCrumbContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  firstText: {
    marginRight: 15,
    fontSize: 17
  },
  secondText: {
    marginLeft: 15,
    fontSize: 17
  },
  ongoingRequestHeaderText: {
    marginTop: 40,
    fontSize: 14,
    marginBottom: 20
  },
  tableContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  head: { height: 40, backgroundColor: '#eee' },
  text: { margin: 6 },
  row: { flexDirection: 'row' },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' }
})
