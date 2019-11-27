import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const DashboadScreen:React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>Dashboad Screen</Text>
        </View>
    )
}

export default DashboadScreen
