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
    constructor (props) {
        super(props);
        this.state = {
            currentUser: ""
        }
    }

    updateUser = (user) => {
        this.setState({
            currentUser: user
        })
    }

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
                        <Login setUser={this.updateUser}/>
                    </Route> 
                    <Route path="/home">
                        {this.state.currentUser ? (
                            <Home currentUser={this.state.currentUser} />
                        ) : (
                                <Redirect to="/login" setUser={this.userState} />
                            )}
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.querySelector(".containerReact"));




