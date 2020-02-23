class Account extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Navbar toLogout={this.props.toLogout}/>
            </React.Fragment>
        )
    }
}