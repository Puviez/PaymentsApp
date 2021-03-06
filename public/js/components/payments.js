// Add Stripe Elements
// import Elements from '@stripe/react-stripe-js';
import loadStripe from '@stripe/stripe-js';
import CardElement from '@stripe/react-stripe-js';
import ElementsConsumer from '@stripe/react-stripe-js';


const stripePromise = loadStripe("pk_test_c6ticSNZgRWokBFo6iYJWwvR00SHRdlRMp");

const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

class CardSection extends React.Component {
    render () {
        return (
            <label>
                Card details
                <CardElement options={CARD_ELEMENT_OPTIONS} />
            </label>
        )
    }
}

class checkoutForm extends React.Component {
    handleSubmit = async (event) => {
      // We don't want to let default form submission happen here,
      // which would refresh the page.
      event.preventDefault();
  
      const {stripe, elements} = this.props
  
      if (!stripe || !elements) {
        // Stripe.js has not yet loaded.
        // Make  sure to disable form submission until Stripe.js has loaded.
        return;
      }
  
      const result = await stripe.confirmCardPayment('{CLIENT_SECRET}', {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: 'Jenny Rosen',
          },
        }
      });
  
      if (result.error) {
        // Show error to your customer (e.g., insufficient funds)
        console.log(result.error.message);
      } else {
        // The payment has been processed!
        if (result.paymentIntent.status === 'succeeded') {
          // Show a success message to your customer
          // There's a risk of the customer closing the window before callback
          // execution. Set up a webhook or plugin to listen for the
          // payment_intent.succeeded event that handles any business critical
          // post-payment actions.
        }
      }
    };
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <CardSection />
          <button disabled={!this.props.stripe}>Confirm order</button>
        </form>
      );
    }
  }
  
//   function injectedCheckoutForm() {
//     return (
//       <ElementsConsumer>
//         {({stripe, elements}) => (
//           <checkoutForm  stripe={stripe} elements={elements} />
//         )}
//       </ElementsConsumer>
//     );
//   }

  class Payment extends React.Component {
    render () {
        return (
            <ElementsConsumer>
                {({stripe, elements}) => (
                <checkoutForm  stripe={stripe} elements={elements} />
                )}
            </ElementsConsumer>
        )
    }
}

export default Payment;