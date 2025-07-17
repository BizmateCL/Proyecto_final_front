import { useReducer } from "react";
import LegginContext from "./LegginContext"
import LegginReducer from "./LegginReducer"
import axiosClient from "../../config/axios";


const LegginState = (props)=> {
    const initialState = {
        leggins: [], //Es un arreglo vacio, los datos vienen de la bd
        currentLeggin: {
            _id: null,
            idProd: '',
            name: '',
            img: '',
            price: '',
            description: '',
            slug: ''
        }
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

    const setCurrentLeggin = (legginData) => {
        dispatch({
        type: "OBTENER_LEGGIN",
        payload: legginData
        })
    }

    return(
        <LegginContext.Provider 
            value={{
                leggins: globalState.leggins,
                currentLeggin: globalState.currentLeggin,
                getLeggins, //trae todos los leggins de la base de datos ,coleccion
                setCurrentLeggin //setea el leggin actual, para poder mostrarlo en el componente SingleLeggin
            }}
        >
            {props.children}
            
        </LegginContext.Provider>

        )

}
export default LegginState;