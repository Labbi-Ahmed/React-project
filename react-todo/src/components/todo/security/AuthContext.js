import { createContext, useState } from "react";

export const AuthContext = createContext()

export default function AuthProvider({children}){
    const [number, setNumber] = useState(0)
   // setInterval(()=> setNumber(number+1),2500)
    return (
        <AuthContext.Provider value={{number}}>
            {children}
        </AuthContext.Provider>
    )
}

