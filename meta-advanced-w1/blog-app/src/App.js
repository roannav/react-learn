import { useUser } from "./UserContext";
import "./App.css";

const LoggedInUser = () => {
  // MYNOTE: {} will destructure the user 
  // from the Object returned by useUser()
  const tempUser = useUser();
  console.log("tempUser");
  console.log(tempUser);
  console.log("useUser returns an object? ", tempUser instanceof Object);
  const { user } = useUser();
  return (
    <p>
      Hello <span className="Username">{user.name}</span>
    </p>
  );
};

const Header = () => {
  return (
    <header>
      <h2>Blog App</h2>
      <LoggedInUser />
    </header>
  );
};

const Page = () => {
  const { user } = useUser();
  return (
    <div>
      <h2>What is dkfdkj dkfj</h2>
      <p>
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
        commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
        tellus.  Bibendum sodales, augue velit cursus nunc,'
      </p>
      <p>Written by {user.name}</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <Page /> 
    </div>
  );
}

export default App;
