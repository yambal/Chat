import React from 'react';

import { connect } from 'react-redux'
import { iRootState } from '../redux/rootState'

import { StyleSheet, Text, View } from 'react-native';

import { Button } from 'react-native-paper';
import { withTheme } from 'react-native-paper';

import locationModule from '../modules/locationModule';
import { iConfigState } from '../modules/configModule';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface iLocation{
  getLocation: () => void
}

const Location:React.FC<iLocation> = props => {
  const handleGetLocation = React.useCallback(
    () => {
      props.getLocation()
    },
    []
  )
  return (
    <View style={styles.container}>
      <Button
        icon="camera"
        mode="contained"
        onPress={handleGetLocation}
      >
        Get Location
      </Button>
    </View>
  )
}

const mapStateToProps = (state:iRootState) => {
  return {
  }
}

const mapDispatchToProps = {
  getLocation: locationModule.actionCreators.getLocation
}

export default withTheme(connect(mapStateToProps, mapDispatchToProps)(Location))
