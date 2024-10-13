import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useGetCarLists } from '../hooks/useGetCarLists'
import MakeList from './MakeList'
import { useCarInfoContext } from '../context/CarsInfoContext'
import { API_URL } from '../constants/env'
import SearchBox from './SearchBox'

const MmvWidget = () => {
    
    const [openMakeId, setOpenMakeId] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [filteredCarsBySearchText, setFilteredCarsBySearchText] = useState([]);
    const {setCars} = useCarInfoContext();
    const { makeWithModelList, popularMakeWithModelList } = useGetCarLists()

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const result = await fetch(API_URL)
                const data = await result.json()
                await setCars({...data})
            } catch (error) {
                console.log("error occures in fetchCars in CarsInfoContext", error)
            }
        }
        fetchCars();
    }, [])

    useEffect(() => {
        // select car from makeWithModelList if search text matches makename or modelname
        const filteredCars = makeWithModelList?.filter((car) => {
            const doesMakeNameMatch = car?.makeName?.toLowerCase().includes(searchText.toLowerCase())
            const doesAnyModelNameMatch = car?.models?.some((model) => model?.name?.toLowerCase().includes(searchText.toLowerCase()))
            if(doesMakeNameMatch || doesAnyModelNameMatch) {
                return car
            }
        })
        setFilteredCarsBySearchText(filteredCars)
    }, [searchText])

  return (
    <ScrollView style={styles.container}>
        <Text style={styles.heading}>Select Your Brand or Model</Text>
        <SearchBox searchText={searchText} setSearchText={setSearchText} />
        {
            (filteredCarsBySearchText.length > 0 && searchText.trim().length > 0) ?

            <View style={styles.section}>
                <MakeList makes={filteredCarsBySearchText} openModel={true} openMakeId={openMakeId} setOpenMakeId={setOpenMakeId} />
            </View> :

            <View>
                <MakeList title="Popular Brands" makes={popularMakeWithModelList} openMakeId={openMakeId} setOpenMakeId={setOpenMakeId} />
                <MakeList title="Other Brands" makes={makeWithModelList} openMakeId={openMakeId} setOpenMakeId={setOpenMakeId} />
            </View>
        }
    </ScrollView>
  )
}

export default MmvWidget

const styles = StyleSheet.create({
    container: {
      width: '100%',
      paddingVertical: 28
    },
    heading: {
      fontWeight: 'bold',
      fontSize: 18,
      padding: 14
    },
    section: {
      marginBottom: 20
    },
    subheading: {
      paddingHorizontal: 14,
      marginTop: 12,
      textTransform: 'uppercase',
      color: 'gray',
      fontSize: 10
    }
  })