import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ModelList = ({models}) => {  
  return (
    <View style={styles.container}>
      {
        models?.length > 0 ?
        models?.map((model) => {
            return <Text style={styles.modelRow} key={model?.id}>{model?.name}</Text>
        }) : <Text style={styles.modelRow}>No models found</Text>
      }
    </View>
  )
}

export default ModelList

const styles = StyleSheet.create({
    modelRow: {
        borderBottomWidth: 0.8,
        borderBottomColor: 'gray',
        backgroundColor: '#f2f2f2',
        borderStyle: 'solid',
        padding: 14,
        color: '#444444'
    }
})