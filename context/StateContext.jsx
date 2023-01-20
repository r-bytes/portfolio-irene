import { createContext, useContext, useState } from "react"

const Context = createContext()

export const StateContext = ({ children }) => {
    const [clickedOn, setClickedOn] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const [activePage, setActivePage] = useState("home")

    return (
       <Context.Provider
            value={{
                clickedOn, setClickedOn,
                isOpen, setIsOpen,
                activePage, setActivePage
            }}>
            {children}
        </Context.Provider>
    )
}
export const useStateContext = () => useContext(Context)