import { useState, createContext, useContext } from "react";
import './App.css';

const UserContext = createContext();

function App() {
  const [user, setUser] = useState("Aimee");

  return (
    <div className="App-header">
      <UserContext.Provider value={user}>
        <h2>{`${user}'s Profile Page`}</h2>
        <BigContainer />
      </UserContext.Provider>
    </div>
  );
}

function BigContainer() {
  return (
    <>
      <div className="bigContainer">
        <DivWithTextAndPhotoAndColorInput />
      </div>
    </>
  );
}

function DivWithTextAndPhotoAndColorInput() {
  return (
    <>
      <div style={{ marginLeft: 100, marginRight: 500}}>
      <p className="smallText">I am baby keytar godard shaman banh mi pour-over hammock air plant sustainable try-hard poke. Vibecession blue bottle la croix locavore. 90s PBR&B pop-up raclette, you probably have not heard of them franzen poke occupy vinyl everyday carry. Blog crucifix quinoa pour-over single-origin coffee palo santo succulents street art locavore jianbing. Gochujang salvia shoreditch tofu. Tofu meditation lumbersexual, thundercats tonx pug PBR&B. Listicle church-key before they sold out cliche, squid 3 wolf moon offal vegan man bun salvia pabst actually hammock ugh.</p>
      <p className="smallText">Bushwick ethical roof party marfa praxis stumptown whatever tilde. Man braid tumblr kickstarter, gluten-free YOLO thundercats JOMO hella pok pok helvetica tofu. Umami viral crucifix big mood, fam DIY hexagon selvage roof party aesthetic. Roof party direct trade hoodie bitters tousled air plant iceland pickled knausgaard tote bag 8-bit cliche single-origin coffee. Pitchfork mlkshk XOXO flannel, direct trade kombucha cred vexillologist sartorial four dollar toast tonx pop-up church-key. Meh retro squid skateboard leggings cardigan tofu mumblecore chicharrones intelligentsia everyday carry. Thundercats</p>

      <PhotoAndColorInput />
      </div>
    </>
  );
}

function PhotoAndColorInput() {
  return (
    <>
      <img src="happy_face_thumbs_up.jpg" alt="happy face with thumbs up"
        style={{width:100}} />
      <br />
      <ColorLabel />
    </>
  );
}

function ColorLabel() {
  const user = useContext(UserContext);

  return (
    <>
      <label>{user}, what&apos;s your favorite color?
      <input type="text" />
      </label>
      <p>{`That's a nice color, ${user}`}</p>
    </>
  );
}

export default App;
