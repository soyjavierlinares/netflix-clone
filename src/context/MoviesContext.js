import React, { useState, useEffect } from "react";
import { useAPI } from "../api";

const MoviesContext = React.createContext({});

export const MoviesProvider = ( props ) => {

    const [movies, setMovies] = useState({});

    return (<MoviesContext.Provider value={{movies, setMovies}} {...props}>
        {props.children}
    </MoviesContext.Provider>)
};


export const useMovies = () =>{

    const context = React.useContext(MoviesContext);

    if(!context){
        throw new Error('useMovies debe estar dentro del proveedor MoviesContext');
    }

    return context;
}


export default MoviesContext