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
  location: any
}

export interface iAddToCountAction {
  type: string
  location?: any
  permission?: Permissions.PermissionResponse
}

/**
 * State
 */
const initial:iLocationState = {
  permission: null,
  location: null
}

/**
 * Action Constructor
 */
const LOCATION_ACTIONS = {
  CHECKED_PERMISSION: 'checked permission',
  GET_ACTIONS : 'LOCATION_ACTIONS_GET_ACTIONSE'
}

/**
 * Reducer
 */
const reducer = (state: iLocationState = initial, action: iAddToCountAction) => {
  console.log(36, action)
  switch (action.type) {
    case LOCATION_ACTIONS.CHECKED_PERMISSION:
        return Object.assign({}, state, { permission: action.permission });
      break
    default: return state
  }
}

/**
 * Actions
 */
const getLocationAction = (location:any):iAddToCountAction => {
  return {
    type: LOCATION_ACTIONS.GET_ACTIONS,
    location
  };
}

const checkedPermissionAction = (permission:Permissions.PermissionResponse) => {
  return {
    type: LOCATION_ACTIONS.CHECKED_PERMISSION,
    permission
  };
}

/**
 * Action creator
 */

const _getLocationAsync = () => {
  return new Promise(async(resolve, reject) => {
    /*
    if (status !== 'granted') {
      reject('Permission to access location was denied')
    }
    */
    Location.getCurrentPositionAsync({})
      .then((location:any) => {
        resolve(location)
      })
  })
}


/** 権限を確認する */
const checkPermission = () => {
  console.log('checkPermission')
  return async (dispatch:any) => {
    const permission = await Permissions.askAsync(Permissions.LOCATION)
    console.log(JSON.stringify(permission, null, 2))
    checkedPermissionAction(permission)
  }
}

const getLocation = () => {
  console.log(45)
  return (dispatch:any) => {
    _getLocationAsync()
      .then((location: any) => {
        console.log(location)
      })
  };
}

const locationModule = {
  initial,
  reducer,
  actionCreators: {
    checkPermission,
    getLocation
  }
}

export default locationModule