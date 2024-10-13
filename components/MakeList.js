import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MakeDropdown from './MakeDropdown';

const MakeList = ({title, makes, openMakeId, setOpenMakeId, openModel = false}) => {
  
  return (
    <View style={styles.section}>
          <Text style={styles.subheading}>{title}</Text>
          {
            makes?.map((make) => 
              <MakeDropdown key={make?.makeId} make={make} openModel={openModel} openMakeId={openMakeId} setOpenMakeId={setOpenMakeId} />
            )
          }
        </View>
  )
}

export default MakeList

const styles = StyleSheet.create({
    subheading: {
      paddingHorizontal: 14,
      marginTop: 12,
      textTransform: 'uppercase',
      color: 'gray',
      fontSize: 10
    },
    section: {
      marginBottom: 20,
      paddingHorizontal: 14
    }
  })