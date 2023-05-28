import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login } from './../pages/Login'
import { Cadastro } from './../pages/Cadastro'
import { Page404 } from './../pages/Page404'

export function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/cadastro" component={Cadastro} />
                <Route path="/*" component={Page404} />
            </Switch>
        </BrowserRouter>
    )
}