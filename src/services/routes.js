import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login } from './../pages/Login'
import { Cadastro } from './../pages/Cadastro'

export function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Login} />
                <Route path="/cadastro" component={Cadastro} />
            </Switch>
        </BrowserRouter>
    )
}