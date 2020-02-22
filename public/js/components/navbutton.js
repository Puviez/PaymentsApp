class NavButton extends React.Component {
    render () {
        return (
            <React.Fragment>
                <div>
                    <Link to={this.props.nav}>{this.props.text}</Link>
                </div>
            </React.Fragment>
        )
    }
}