import React from "react";
import {Routes, Route} from "react-router-dom";
import Netflix from "../pages/Netflix";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Player from "../pages/Player";
import TVShows from "../pages/TVShows";
import Movies from "../pages/Movies"
// import Player from "../pages/Player";
import UserListedMovies from "../pages/UserListedMovies";

const AppRoute = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Netflix/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path="/player" element={<Player/>}></Route>
            <Route path='/login' element={<Login/>}></Route> 
            <Route path="/tv" element={<TVShows/>}></Route> 
            <Route path="/movies" element={<Movies/>}></Route>  
            <Route path="/new" element={<Player />} />
        <Route path="/mylist" element={<UserListedMovies />} />    
        </Routes>      

    )
}
export default AppRoute;