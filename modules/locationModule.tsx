import React, { Component } from 'react';
import * as Location from "expo-location";
import { Platform, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

/** https://docs.expo.io/versions/latest/sdk/location/ */

/**
 * interfaces
 */
export interface iLocationState {
  permission: Permissions.PermissionResponse
  isWatching: boolean
  location: any | null
}

/**
 * State
 */
const initial:iLocationState = {
  permission: null,
  isWatching: false,
  location: null
}

/**
 * Action Constructor
 */
const LOCATION_ACTIONS = {
  CHECKED_PERMISSION: 'checked permission',
  ON_WATCH_STARTED: 'ON_WATCH_STARTED',
  ON_WATCH_STOPED: 'ON_WATCH_STOPED',
  ON_LOCATION: 'on location',
  GET_ACTIONS : 'LOCATION_ACTIONS_GET_ACTIONSE'
}

/**
 * Reducer
 */
const reducer = (state: iLocationState = initial, action: any) => {
  console.log(36, action)
  switch (action.type) {
    case LOCATION_ACTIONS.CHECKED_PERMISSION:
      return Object.assign({}, state, { permission: action.permission });
    case LOCATION_ACTIONS.ON_WATCH_STARTED:
      return Object.assign({}, state, { isWatching: true });
    case LOCATION_ACTIONS.ON_WATCH_STOPED:
      return Object.assign({}, state, { isWatching: false });
    case LOCATION_ACTIONS.ON_LOCATION:
      return Object.assign({}, state, { location: action.location });
    default: return state
  }
}

/**
 * Actions
 */
const checkedPermissionAction = (permission:Permissions.PermissionResponse) => {
  return {
    type: LOCATION_ACTIONS.CHECKED_PERMISSION,
    permission
  };
}

const onWatchStart = () => {
  return {
    type: LOCATION_ACTIONS.ON_WATCH_STARTED
  };
}

const onWatchStop = () => {
  return {
    type: LOCATION_ACTIONS.ON_WATCH_STOPED
  };
}

const onLocationAction = (location:any):any => {
  console.log('onLocationAction')
  return {
    type: LOCATION_ACTIONS.ON_LOCATION,
    location
  };
}

// ---------------------------------------------------------------
/**
 * Action creator
 */

/** 権限を確認する */
const checkPermission = () => {
  return async (dispatch:any) => {
    const permission = await Permissions.askAsync(Permissions.LOCATION)
    console.log(JSON.stringify(permission, null, 2))
    dispatch(checkedPermissionAction(permission))
  }
}

/**
 * watchPositionAsync
 */
let watcher: { remove(): void; }
const watchPosition = () => {
  return async(dispatch:any) => {
    const permission = await Permissions.askAsync(Permissions.LOCATION)

    if (watcher){
      watcher.remove()
      watcher = null
      dispatch(onWatchStop())
      dispatch(onLocationAction(null))
    }

    dispatch(onWatchStart())
    watcher = await Location.watchPositionAsync({
      enableHighAccuracy:true, // Hi
      accuracy: Location.Accuracy.Highest,
      timeInterval: 1000,
      distanceInterval: 3,
      mayShowUserSettingsDialog: true
    }, (location) => {
      dispatch(onLocationAction(location))
    })
    dispatch(onWatchStart())
  };
}

const clearWatch = () => {
  return async(dispatch:any) => {
    if (watcher){
      watcher.remove()
      watcher = null
      dispatch(onWatchStop())
      dispatch(onLocationAction(null))
    }
  }
}

const locationModule = {
  initial,
  reducer,
  actionCreators: {
    checkPermission,
    watchPosition,
    clearWatch
  }
}

export default locationModule