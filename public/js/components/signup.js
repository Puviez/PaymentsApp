class Signup extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            stripe_id: "",
            username: "",
            password: "",
            name: "",
            email: "",
            cards: [],
            transactions: [],
            redirect: false
        };
    }

    handleChange = event => {
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();
        // fetch("https://api.stripe.com/v1/customers", {
        //     method: "POST",
        //     headers: {
        //         Authorization: "Bearer sk_test_gkQR8IrPPm3BHB3HXiPDbslu00UmRZMhQc",
        //         "Content-Type": "application/x-www-form-urlencoded"
        //     },
        //     body: {
        //         description: this.state.username,
        //         email: this.state.email,
        //         name: this.state.name
        //     }
        // })
        //   .then(createdStripeUser => {
        //       console.log(createdStripeUser)
        //       return createdStripeUser.json();
        //   })
        //   .then(stripeUser => {
        //       this.setState({
        //           stripe_id: stripeUser.id
        //       });
        //       console.log(this.state)
        //   })
        //   .catch(error => console.log(error));
        fetch("/users", {
            body: JSON.stringify(this.state),
            method: "POST",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json"
            }
          })
            .then(createdUser => {
              console.log(createdUser);
              return createdUser.json();
            })
            .then(() => {
              // to toggle to true to redirect
              this.setState({
                redirect: true
              });
            })
            .catch(error => console.log(error));
        };

    render () {
        if (this.state.redirect === true) {
            return <Redirect to="/login" />;
        }
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>Username</label>
                    <input
                        id='username'
                        type='text'
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <label htmlFor='password'>Password</label>
                    <input
                        id='password'
                        type='password'
                        value={this.state.password}
                        onChange={this.handleChange}
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
            </React.Fragment>
        )
    }
}


