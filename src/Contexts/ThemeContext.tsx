import React, { createContext, useContext, useState  } from 'react'

interface ThemeContextType { 
    theme: string; 
    setTheme: React.Dispatch<React.SetStateAction<string>>; 
    }
const ThemeContext = createContext<ThemeContextType | undefined> (undefined)

export function ThemeProvider ({children}: {children:React.ReactNode}){
    const [theme, setTheme] = useState('light');
    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() { 
    const context = useContext(ThemeContext); 
    if (context === undefined) { 
      throw new Error("ThemeContext must be used within a ThemeProvider"); 
    } 
    return context; 
}


  