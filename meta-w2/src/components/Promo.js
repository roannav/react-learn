// Use a list of data in JSX

const data = [
  {
    heading: "Don't miss this deal!",
    callToAction: "Subscribe to my newsletter and get all the shop items at 50% off!"
  },
  {
    heading: "99% off all t-shirts!",
    callToAction: "Everything must go!"
  }
]

function OnePromo(props) {
  return (
    <>
      <h1>{props.heading}</h1>
      <h2>{props.callToAction}</h2>
    </>
  );
}

function Promo() {
  return (
    <div className="promo-section">
      <div className="one-promo">
        {data.map((datum, index) => (
          <OnePromo key={index}
            heading={datum.heading}
            callToAction={datum.callToAction}
          />
        ))}
      </div>
    </div>
  );
};

export default Promo;
