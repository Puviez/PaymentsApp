// Import React Router
const {
    Redirect,
    BrowserRouter,
    Link,
    Switch,
    Route,
    browserHistory
  } = ReactRouterDOM;

class App extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Main />
                    </Route>
                    <Route path="/signup">
                        <Signup />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route> 
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.querySelector(".containerReact"));




