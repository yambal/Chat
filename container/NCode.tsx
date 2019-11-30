import React from 'react';

import { connect } from 'react-redux'
import { iRootState } from '../redux/rootState'

import { StyleSheet, Text, View } from 'react-native';

import { Button } from 'react-native-paper';
import { withTheme } from 'react-native-paper';

import counterModule from '../modules/counterModule';
import { iConfigState } from '../modules/configModule';
import nCodeModule from '../modules/nCodeModule';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface iTest{
    getNCode: (lat: number, lng:number) => void
}

const NCode:React.FC<iTest> = props => {
  const handleTest = React.useCallback(
    () => {
      props.getNCode(35, 135)
    },
    []
  )
  return (
    <View style={styles.container}>
      <Button
        icon="camera"
        mode="contained"
        onPress={handleTest}
      >
        Test
      </Button>
    </View>
  )
}

const mapStateToProps = (state:iRootState) => {
  return {
  }
}

const mapDispatchToProps = {
    getNCode: nCodeModule.actionCreators.getNCode
}

export default withTheme(connect(mapStateToProps, mapDispatchToProps)(NCode))