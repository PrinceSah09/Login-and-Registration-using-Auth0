import { useAuth0 } from "@auth0/auth0-react";
import Card from "./components/Card";
import "./App.css";
import "./components/Card.css";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap')
</style>;

function App() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <div className="content">
      <div className="App">
        {isAuthenticated ? <Card data={user} /> : <p></p>}
        {isAuthenticated ? (
          <button onClick={(e) => logout()}>Logout</button>
        ) : (
          <button
            onClick={(e) => {
              loginWithRedirect();
            }}
          >
            Login with Redirect
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
