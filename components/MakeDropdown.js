import { StyleSheet, Text, TouchableWithoutFeedback , View } from 'react-native'
import React from 'react'
import ModelList from './ModelList'
import AntDesign from '@expo/vector-icons/AntDesign';

const MakeDropdown = ({ openModel = false, make, openMakeId, setOpenMakeId }) => {
    const isOpen = make?.makeId === openMakeId;
    const handleDropdownPress = () => {
        if(make?.makeId !== openMakeId) {
            setOpenMakeId(make?.makeId);
        }
        else {
            setOpenMakeId(null);
        }
    }

    if(make?.models?.length === 0 || make === null) {
        return;
    }
  return (
    <TouchableWithoutFeedback style={styles.container} onPress={handleDropdownPress}>
        <View style={styles.container}>
            <View style={styles.dropdown}>
                <Text style={styles.makeText}>{make?.makeName}</Text>
                <AntDesign name={(isOpen || openModel) ? "up" : "down"} size={14} color="black" />
            </View>
            {
               (isOpen || openModel) && <ModelList models={make?.models} />
            }
        </View>
    </TouchableWithoutFeedback >
  )
}

export default MakeDropdown

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 0.8,
        borderBottomColor: 'gray',
    },
    dropdown: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    makeText: {
        fontSize: 16,
        fontWeight: 'semibold',
        padding: 14
    }
})