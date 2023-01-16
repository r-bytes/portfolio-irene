import { createContext, useContext, useState } from "react"

const Context = createContext()

export const StateContext = ({ children }) => {
    const [clickedOn, setClickedOn] = useState("")
    return (
       <Context.Provider
            value={{
                clickedOn, setClickedOn
            }}>
            {children}
        </Context.Provider>
    )
}
export const useStateContext = () => useContext(Context)