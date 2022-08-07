import React, { useContext } from "react"

function Prog6() {

    let ThemeContext = React.createContext('dark')

    let Display = () => {
        let theme = useContext(ThemeContext);
        return <div
                style={{
                    background: theme === 'dark' ? 'black' : 'pink',
                    color: theme === 'dark' ? 'white' : 'pale',
                    width: '100%',
                    minHeight: '200px'
                }}
        >
            {'The theme here is' + theme}
   
        </div>
    }

    //Display()
    return <>
        <button onClick={Display}>Change Theme</button>
    </>
}

export {Prog6}