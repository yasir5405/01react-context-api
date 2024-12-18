import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      {/* {user} */}
      <h1 className="text-5xl">Hey, Login to Continue</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;  
