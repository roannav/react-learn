import { useState } from "react";

export default function App() {
  const [giftCard, setGiftCard] = useState(
    {
      firstName: "Jennifer",
      lastName: "Smith",
      text: "Free dinner for 4 guests",
      valid: true,
      instructions: "To use your coupon, click the button below.",
    }
  );

  function spendGiftCard() {

    // If I had bad code, that messes up the 
    // state, then later run good code,
    // but without restarting the dev server,
    // then I get this error:
    //  ReferenceError: gift is not defined
    // Solution: quit the app and restart the
    // dev server by typing `npm start`

    // works
    //setGiftCard({...giftCard, text: "foo"});

    // works
    /*
    let giftCardCopy = {...giftCard};
    giftCardCopy.text = "foo";
    setGiftCard(giftCardCopy);
    */

    // works
    // This set state function knows that 
    // the argument that is passed to the
    // arrow function is the PREVIOUS STATE
    setGiftCard(prevState => {
      // use the ...rest operator
      return { ...prevState, 
        text: "Your coupon has been used.",
        instructions: "Please visit our restaurant to renew your gift card.",
        valid: false
      };
    })
  }

  return (
    <div style={{ padding: '40px' }}>
      <h1>
        Gift Card Page
      </h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3>
        {giftCard.text}
      </h3>
      <p>
        {giftCard.instructions}
      </p>
      {
        giftCard.valid && (
          <button onClick={spendGiftCard}>
            Spend Gift Card
          </button>
        )
      }
    </div>
  );
}
