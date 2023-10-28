import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/movies" element={<h1>Movies</h1>} />
          <Route path="/tickets" element={<h1>Tickets</h1>} />
          <Route path="/add-ticket" element={<h1>Create ticket</h1>} />
          <Route path="/ticket/:id" element={<h1>Update ticket</h1>} />
          <Route path="/profile" element={<h1>Profile</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
