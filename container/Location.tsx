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
  checkPermission: () => void
  getLocation: () => void
}

const Location:React.FC<iLocation> = props => {
  const handleGetLocation = React.useCallback(
    () => {
      props.checkPermission()
      //props.getLocation()
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
      <Text>{props.permission}</Text>
    </View>
  )
}

const mapStateToProps = (state:iRootState) => {
  return {
    permission: state.location.permission
  }
}

const mapDispatchToProps = {
  checkPermission: locationModule.actionCreators.checkPermission,
  getLocation: locationModule.actionCreators.getLocation
}

export default withTheme(connect(mapStateToProps, mapDispatchToProps)(Location))
