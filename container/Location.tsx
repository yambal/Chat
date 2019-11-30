import React from 'react';

import { connect } from 'react-redux'
import { iRootState } from '../redux/rootState'

import { StyleSheet, Text, View, Permission } from 'react-native';

import { Button } from 'react-native-paper';
import { withTheme } from 'react-native-paper';

import locationModule from '../modules/locationModule';
import * as Permissions from 'expo-permissions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface iLocation{
  permission: Permissions.PermissionResponse
  location: any
  checkPermission: () => void
  getLocation: () => void
  watchLocation: () => void
}

const Location:React.FC<iLocation> = props => {
  const handleGetLocation = React.useCallback(
    () => {
      props.checkPermission()
    },
    []
  )

  const handleWatchLocation = React.useCallback(
    () => {
      props.watchLocation()
    },
    []
  )

  React.useEffect(() => {
    console.log('props.permission')
    console.log(JSON.stringify(props.permission))
  },[props.permission]);


  return (
    <View style={styles.container}>
      <Button
        icon="camera"
        mode="contained"
        onPress={handleGetLocation}
      >
        Get Location
      </Button>
      <Text>{props.permission ? JSON.stringify(props.permission) : 'none permission'}</Text>
      <Button
        icon="camera"
        mode="contained"
        onPress={handleWatchLocation}
      >
        Watch Location
      </Button>
      <Text>{props.location ? JSON.stringify(props.location) : 'none location'}</Text>
    </View>
  )
}

const mapStateToProps = (state:iRootState) => {
  return {
    permission: state.location.permission,
    location: state.location.location
  }
}

const mapDispatchToProps = {
  checkPermission: locationModule.actionCreators.checkPermission,
  getLocation: locationModule.actionCreators.getLocation,
  watchLocation: locationModule.actionCreators.watchPosition
}

export default withTheme(connect(mapStateToProps, mapDispatchToProps)(Location))
