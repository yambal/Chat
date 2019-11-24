import React from 'react';

import { connect } from 'react-redux'
import { iRootState } from '../redux/rootState'

import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface iTest{
  count: number
}

const Test:React.FC<iTest> = props => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app! {props.count}</Text>
    </View>
  )
}

const mapStateToProps = (state:iRootState) => {
  return {
    count: state.counter.count
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)
