import { createContext, useContext, useState } from "react"

const Context = createContext()

export const StateContext = ({ children }) => {
    const [clickedOn, setClickedOn] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const [activePage, setActivePage] = useState("home")
    const [captchaDone, setCaptchaDone] = useState()

    return (
       <Context.Provider
            value={{
                clickedOn, setClickedOn,
                isOpen, setIsOpen,
                activePage, setActivePage,
                captchaDone, setCaptchaDone
            }}>
            {children}
        </Context.Provider>
    )
}
export const useStateContext = () => useContext(Context)