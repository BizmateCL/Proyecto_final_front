import React, { useReducer } from "react"
import LegginContext from "./LegginContext"
import LegginReducer from "./LegginReducer"
import axiosClient from "../../config/axios";


const LegginState = (props)=> {
    const initialState = {
        leggins: [] //Es un arreglo vacio, los datos vienen de la bd
    }
    const [globalState, dispatch] = useReducer(LegginReducer, initialState);
    
    const getLeggins = async() => {
        
        try {
            const res = await axiosClient.get('/leggins') //http://localhost:3000/api/leggins
            console.log(res.data);
            
        dispatch({
        type: 'OBTENER_LEGGINS',
        payload: res.data.leggins
        })
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <LegginContext.Provider 
            value={{
                leggins: globalState.leggins,
                //leggins: initialState.leggins,
                getLeggins
            }}
        >
            {props.children}
            
        </LegginContext.Provider>

        )

}
export default LegginState;