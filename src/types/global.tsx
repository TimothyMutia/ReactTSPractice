export interface ThemeContextType { 
    theme: string; 
    setTheme: React.Dispatch<React.SetStateAction<string>>; 
    }

export interface Device { 
    id?: number;
    name?: string;  
    color?: string; 
    price?: number; 
    } 

export interface deviceProps{
    device:Device;
}