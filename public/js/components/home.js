class Home extends React.Component {
    render () {
        return (
            <React.Fragment>
                <h1>{'Welcome '+ this.props.currentUser.name + "!"}</h1>
                <Navbar toLogout={this.props.toLogout}/>
            </React.Fragment>
        )
    }
}