const LegginReducer=(globalState,action)=>{
    switch(action.type){//el switch evalua el tipo de accion
        case "OBTENER_LEGGINS":
        return{
            ...globalState,
            leggins: action.payload //action.payload es el arreglo de leggins que viene del backend
        }


        default:
            return globalState;
    }
}
export default LegginReducer;