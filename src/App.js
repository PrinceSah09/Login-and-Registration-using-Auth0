// Import necessary dependencies and components
import { useAuth0 } from "@auth0/auth0-react"; // Importing the useAuth0 hook from the Auth0 library
import Card from "./components/Card";
import "./App.css";
import "./components/Card.css";

// CSS import for external fonts
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap')
</style>;

// Define the main App component
function App() {
  // Destructuring properties from the useAuth0 hook
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  // Return the JSX content of the App component
  return (
    <div className="content">
      <div className="App">
        <div className="headerText">
          <h1>
            Authentication System Using <br />{" "}
            <span> Auth0 and Microsoft Identity</span>
          </h1>
        </div>
        {isAuthenticated ? <Card data={user} /> : <p></p>}{" "}
        {/* Conditional rendering of Card component based on user authentication */}
        {isAuthenticated ? (
          <button onClick={(e) => logout()}>Logout</button>
        ) : (
          <button
            onClick={(e) => {
              loginWithRedirect();
            }}
          >
            Login or Sign-Up
          </button>
        )}
      </div>
    </div>
  );
}

export default App; // Export the App component as default
