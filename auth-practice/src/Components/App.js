import Signup from "./Signup";
import { Container } from "react-bootstrap";
import AuthProvider from "../Contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <AuthProvider>
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Router>
              <Routes>
                <Route path="/signup" component={Signup} />
              </Routes>
            </Router>
          </div>
        </Container>
      </AuthProvider>
    </>
  );
}

export default App;
