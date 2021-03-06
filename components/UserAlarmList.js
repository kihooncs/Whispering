import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import UserAlarm from './UserAlarm';

const UserAlarmList = props => {

    const renderAlarm = itemData => {
        return (
            <UserAlarm time={itemData}/>
        );
    };

    return (
        <View style={styles.list}>
            <FlatList
                data={props.data}
                renderItem={renderAlarm}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5%'
    }
});

export default UserAlarmList;