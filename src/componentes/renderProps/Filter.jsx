import { useState } from "react"

export const Filter = ({ children }) => {
    const [filterState, setFilterState] = useState('')

    const handleFilterChange = (event) => {
        // console.log(event.target.value)
        setFilterState(event.target.value)
    }
    return children({filterState, handleFilterChange})
}