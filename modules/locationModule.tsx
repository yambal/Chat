import React, { Component } from 'react';
import * as Location from "expo-location";
import { Platform, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

/**
 * interfaces
 */
export interface iLocationState {
  location: any
}

export interface iAddToCountAction {
  type: string
  location: any
}

/**
 * State
 */
const initial:iLocationState = {
  location: null
}

/**
 * Action Constructor
 */
const LOCATION_ACTIONS = {
  GET_ACTIONS : 'LOCATION_ACTIONS_GET_ACTIONSE'
}

/**
 * Reducer
 */
const reducer = (state: iLocationState = initial, action: iAddToCountAction) => {
  console.log(36, action)
    switch (action.type) {
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

/**
 * Action creator
 */
const _getLocationAsync = () => {
  return new Promise(async(resolve, reject) => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);

    console.log(57, status)
    if (status !== 'granted') {
      reject('Permission to access location was denied')
    }

    Location.getCurrentPositionAsync({})
      .then((location:any) => {
        resolve(location)
      })
  })
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
    getLocation
  }
}

export default locationModule