import React, {useEffect, useState, useContext} from 'react'
import axios from 'axios'
const DataContext = React.createContext()
export function DataProvider({children}) {
    const [state, setState] = useState([])

    useEffect(() => {
        axios.get("Players.json").then((response) => {
            setState(response.data.players)
            
        });
    }, []);
    return (
        <DataContext.Provider value={
            [state, setState]
        }>
            {children} </DataContext.Provider>
    )
}
export default function useData() {
    return useContext(DataContext)
}
