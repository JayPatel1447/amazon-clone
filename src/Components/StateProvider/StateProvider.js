import React, {createContext, useContext, useReducer} from "react"

// Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease. Let's see how to use it.

// Prepares the datalayer
export const StateContext = createContext();

// wrap our app and provide the Data Layer
export const StateProvider = ({reducer, initialState, children}) =>(

    <StateContext.Provider value={useReducer(reducer,initialState)}>
            {children}
    </StateContext.Provider>
);

//Pull info from the data layer
export const useStateValue = () => useContext(StateContext);