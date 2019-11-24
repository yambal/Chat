import React from 'react';

import { connect } from 'react-redux'
import { iRootState } from '../redux/rootState'

import { StyleSheet, Text, View } from 'react-native';

import { Button } from 'react-native-paper';
import { withTheme } from 'react-native-paper';

import counterModule from '../modules/counterModule';
import { iConfigState } from '../modules/configModule';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface iTest{
  config: iConfigState
  count: number
  add: (n: number) => void
}

const Test:React.FC<iTest> = props => {
  const handleAdd = React.useCallback(
    () => {
      props.add(1)
    },
    []
  )
  return (
    <View style={styles.container}>
      <Text>[{props.count}], {props.config.testString}</Text>
      <Button
        icon="camera"
        mode="contained"
        onPress={handleAdd}
      >
        Press Me
      </Button>
    </View>
  )
}

const mapStateToProps = (state:iRootState) => {
  return {
    count: state.counter.count,
    config: state.config
  }
}

const mapDispatchToProps = {
  add: counterModule.actionCreators.add
}

export default withTheme(connect(mapStateToProps, mapDispatchToProps)(Test))
