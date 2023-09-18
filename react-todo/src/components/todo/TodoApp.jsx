import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginFrom from "./login/LoginForm";
import "./TodoApp.css";
import Logout from "./login/Logout";
import Welcome from "./welcome/Welcome";
import ErrorPage from "./login/ErrorPage";
import ListTodo from "./listTodo/ListTodo";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import AuthProvider, { useAuth } from "./security/AuthContext";

function AuthenticatedRoute({ children }) {
  const authContext = useAuth();
  if (authContext.isAuthenticated) return children;

  return <Navigate to="/" />;
}

export default function TodoApp() {
  return (
    <div className="TodoApp">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<LoginFrom />} />
            <Route path="/login" element={<LoginFrom />} />

            <Route
              path="/todos"
              element={
                <AuthenticatedRoute>
                  <ListTodo />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/welcome"
              element={
                <AuthenticatedRoute>
                  <Welcome />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/logout"
              element={
                <AuthenticatedRoute>
                  <Logout />
                </AuthenticatedRoute>
              }
            />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
