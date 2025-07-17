import { useReducer } from "react";
import axiosClient from "../../config/axios";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";

const UserState = (props) => {
  const initialState = {
    currentUser: {
      username: "",
      email: "",
      country: "",
      address: "",
      zipcode: 0,
    },
    authStatus: false,
    cart: [],
    sessionURL: null,
    globalLoading: false
  };

  const [globalState, dispatch] = useReducer(UserReducer, initialState);

  const registerUser = async (form) => {
    try {
      const res = await axiosClient.post("/users/create", form); 
      dispatch({
        type: "REGISTRO_EXITOSO",
        payload: res.data,
      });
      return true;
    } catch (error) {
      return false;
    }
  };


  const loginUser = async (form) => {
    try {
      await axiosClient.post("/users/login", form, {
        withCredentials: true,
      });

      dispatch({
        type: "LOGIN_EXITOSO",
      });
      return;
    } catch (error) {
      return error.response.data.msg;
    }
  };

  const verifyingUser = async () => {
    try {
      
      const res = await axiosClient.get("/users/verify-user", {
        withCredentials: true,
      });
      const userData = res.data.user;

      dispatch({
        type: "GET_DATA_USER",
        payload: userData,
      });
    } catch (error) {
      return;
    }
  };

  const updateUser = async (formData) => {
    await axiosClient.put('/users/update', formData, {
      withCredentials: true // para hacer uso de la cookie
    })
  }

  const logoutUser = async () => {
    try {
      await axiosClient.post("/users/logout", {}, { withCredentials: true });

      dispatch({
        type: "LOGOUT_USUARIO",
        payload: "Sesión cerrada correctamente",
      });
      //navigate("iniciar-sesion");
      return true;
    } catch (error) {
      console.error("Error cerrando sesión:", error);
    }
  };

  const editCart = async (data) => {
    try {
      const res = await axiosClient.put('/carts/edit-cart', { products: data }, { withCredentials: true });

      await getCart();

      return res.data.msg;
    } catch (error) {
      console.log(error);
      return
    }
  } 

  const getCart = async () => {
    try {
      const res = await axiosClient.get('/carts/get-cart', { withCredentials: true });
      dispatch({
        type: "GET_CART",
        payload: res.data.cart.products
      })
    } catch (error) {
      console.log(error);
      return;
    }
  }
 
const getCheckoutSession = async () => {
    try {
      const res = await axiosClient.get('/carts/create-checkout-session', {
        withCredentials: true
      })

      dispatch({
        type: "GET_CHECKOUT_SESSION",
        payload: res.data.session_url
      })
    } catch (error) {
      console.log(error);
      return;
    }
  }

  const setLoading = (status) => {
    dispatch({
      type: "CHANGE_STATUS_LOADING",
      dispatch: status
    })
  }

  return (
    <UserContext.Provider
      value={{
        currentUser: globalState.currentUser,
        cart: globalState.cart,
        authStatus: globalState.authStatus,
        globalLoading: globalState.globalLoading,
        sessionURL: globalState.sessionURL,
        registerUser,
        loginUser,
        verifyingUser,
        updateUser,
        logoutUser,
        editCart,
        getCart,
        getCheckoutSession,
        setLoading
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
