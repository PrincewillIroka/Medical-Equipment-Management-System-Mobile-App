import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  ActivityIndicator
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component'
import { setData } from '../store/actions'
import { connect } from 'react-redux'
import axios from 'axios'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tableHead: ['S/N', 'Department', 'Complaint', 'No. Required', ''],
      tableData: [
        ['1', '2', '3', '4', ''],
        ['a', 'b', 'c', 'd', ''],
        ['1', '2', '3', '4', ''],
        ['a', 'b', 'c', 'd', '']
      ],
      isLoading: true
    }
  }

  alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`)
  }

  checkIndexIsEven(n) {
    return n % 2 !== 0
  }

  render() {
    const state = this.state
    const element = (data, index) => (
      <TouchableOpacity onPress={() => this.alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Mark as fixed</Text>
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

mapStateToProps = state => {
  return {
    equipmentRequests: state.userReducer.equipmentRequests
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
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

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
  head: { height: 40, backgroundColor: '#ccc', marginBottom: 20 },
  text: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    textAlign: 'center'
  },
  row: { flexDirection: 'row', marginBottom: 20 },
  btn: { backgroundColor: '#3089f9', borderRadius: 3 },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 5,
    paddingBottom: 5
  }
})
