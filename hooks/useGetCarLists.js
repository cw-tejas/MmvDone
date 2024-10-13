import { useEffect, useState } from "react"
import { useCarInfoContext } from "../context/CarsInfoContext"

export const useGetCarLists = () => {
    const { cars } = useCarInfoContext()
    const modelList = cars?.modelList || [];
    const makeList = cars?.makeList || [];
    const popularMakeList = cars?.popularMakeList || [];
    const [makeWithModelList, setMakeWithModelList] = useState([])
    const [popularMakeWithModelList, setPopularMakeWithModelList] = useState([])
    
    useEffect(() => {
        const makesWithModel = makeList.map(make => {
            let models = []
            modelList.map(model => {
                if(model?.makeId === make?.makeId) {
                    models = [...models, model]
                }
            })
            return {
                ...make,
                models
            }
        })
        const popularMakesWithModel = popularMakeList.map(make => {
            let models = []
            modelList.map(model => {
                if(model?.makeId === make?.makeId) {
                    models = [...models, model]
                }
            })
            return {
                ...make,
                models
            }
        })
        setMakeWithModelList(makesWithModel)
        setPopularMakeWithModelList(popularMakesWithModel)
    }, [cars])
    return { makeWithModelList, popularMakeWithModelList } 
}