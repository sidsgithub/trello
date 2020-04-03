import React from 'react';
import { Switch, Route } from 'react-router';
import Board from './Components/Board'
import BoardStation from "./Components/BordStation";
import SignIn from './Components/SignIn/index';
import SignUp from './Components/SignUp/index';


const Routes = ()=>{
    return(
        <Switch>
            <Route path ="/" component = {SignUp} exact></Route>
            <Route path ="/boardstation" component = {BoardStation}></Route>
            <Route path ="/signin" component = {SignIn}></Route>
            <Route path ="/board" component = {Board}></Route>
            <Route path="/board/:id" children={<Board/>} />
        </Switch>
    )
}


export default Routes;