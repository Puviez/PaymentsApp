class Main extends React.Component {
    render () {
        return (
            <React.Fragment>
                <NavButton nav={"/login"} text={"Login"} />
                <NavButton nav={"/signup"} text={"Sign Up"} />
            </React.Fragment>
        )
    }
}