import { Switch } from 'react-router-dom'
import { MyRoute } from "./MyRoute";

import { Login } from './../pages/Login'
import { Cadastro } from './../pages/Cadastro'
import { Page404 } from './../pages/Page404'

export function Routes(){
    return(
        <Switch>
            <MyRoute path="/login"         component={Login} />
            <MyRoute path="/cadastro" component={Cadastro} />
            <MyRoute path="*"              component={Page404} />
        </Switch>
    )
}