import React from 'react';

import { connect } from 'react-redux'
import { iRootState } from '../redux/rootState'

import { StyleSheet, Text, View } from 'react-native';

import { Appbar, Button } from 'react-native-paper';
import { withTheme } from 'react-native-paper';

import nCodeModule from '../modules/nCodeModule';
import locationModule from '../modules/locationModule';
import * as Permissions from 'expo-permissions';

// import Location from './Location'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

declare type ncode = {
  blockName: string
  unitName: string
  ewMeshName: string
  nsMeshName: string
}

interface iNCode{
  permission: Permissions.PermissionResponse
  isWatching: boolean
  checkPermission: () => void
  watchLocation: () => void
  clearWatch: () => void
  getNCode: (lat: number, lng:number) => void
  location: any
  ncode: ncode
}

const NCode:React.FC<iNCode> = props => {
  const [location, setLocation] = React.useState(props.location)
  const [isPermissionGranted, setIsPermissionGranted] = React.useState(false)

  // マウント時にPermissionを確認する
  React.useEffect(() => {
    props.checkPermission()
    // props.watchLocation()
  }, [])

  // Permissionの変化を受けて
  React.useEffect(() => {
    if(props.permission){
      console.log(props.permission.status)
      setIsPermissionGranted(props.permission.status === 'granted')
      console.log(props.permission.expires)
    }
  },[props.permission]);

  // Permissionの変化に合わせて
  React.useEffect(() => {
    if(isPermissionGranted){
      props.watchLocation()
    } else {
      props.clearWatch()
    }
  },[isPermissionGranted]);

  React.useEffect(() => {
    setLocation(props.location)
    if (props.location) {
      const lat:number = props.location.coords.latitude
      const lng:number = props.location.coords.longitude
      console.log(lat, lng)
      props.getNCode(lat, lng)
    }
  },[props.location]);

  const handleStop = () => {
    props.clearWatch()
  }

  const handleStart = () => {
    props.watchLocation()
  }

  

  return (
    <View style={styles.container}>
      {isPermissionGranted
        ? <React.Fragment>
          {props.isWatching
            ? <React.Fragment>
              <Text>{location ? `${location.coords.latitude}, ${location.coords.longitude}` : 'none location'}</Text>
              <Text>{props.ncode ? `${props.ncode.blockName}-${props.ncode.unitName}-${props.ncode.ewMeshName}-${props.ncode.nsMeshName}` : 'none ncode 2'}</Text>
            </React.Fragment>
            : <React.Fragment>
              <Text>Wait</Text>
            </React.Fragment>
          }
        </React.Fragment>
        : <React.Fragment>
          <Button
            icon="camera"
            mode="contained"
            onPress={handleStart}
          >
            Start
          </Button>
        </React.Fragment>
      }
     </View>
  )
}

const mapStateToProps = (state:iRootState) => {
  return {
    permission: state.location.permission,
    isWatching: state.location.isWatching,
    location: state.location.location,
    ncode: state.nCode.ncode
  }
}

const mapDispatchToProps = {
  checkPermission: locationModule.actionCreators.checkPermission,
  watchLocation: locationModule.actionCreators.watchPosition,
  clearWatch: locationModule.actionCreators.clearWatch,
  getNCode: nCodeModule.actionCreators.getNCode,
}

export default withTheme(connect(mapStateToProps, mapDispatchToProps)(NCode))