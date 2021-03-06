class Account extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            username: this.props.currentUser.username,
            name: this.props.currentUser.name,
            email: this.props.currentUser.email,
            cards: this.props.currentUser.cards,
            addCard: false
        }
    }

    handleChange = event => {
        this.setState({[event.target.id]: event.target.value});
    }

    // Edit the User 
    handleEdit = event => {
        event.preventDefault();
        fetch('/users/' + this.props.currentUser._id, {
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email
            }),
            method: "PUT",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        })
          .then(editedUser => {
              return editedUser.json();
          })
          .then(jsonedEditedUser => {
              console.log(jsonedEditedUser);
          })
          .catch(error => console.log(error));
    }

    toggleAddCard = () => {
        this.setState({
            addCard: !this.state.addCard
        })
    }

    render () {
        return (
            <React.Fragment>
                <form onSubmit={this.handleEdit}>
                    <label htmlFor='username'>Username</label>
                    <input
                        id='username'
                        type='text'
                        value={this.state.username}
                    />
                    <label htmlFor='name'>Name</label>
                    <input
                        id='name'
                        type='text'
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <label htmlFor='email'>Email</label>
                    <input
                        id='email'
                        type='text'
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <input
                        type='submit'
                        value='Submit'
                    />
                </form>
                <Navbar toLogout={this.props.toLogout}/>
            </React.Fragment>
        )
    }
}