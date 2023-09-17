import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginFrom from "./login/LoginForm";
import "./TodoApp.css";
import Logout from "./login/Logout";
import Welcome from "./welcome/Welcome";
import ErrorPage from "./login/ErrorPage";
import ListTodo from "./listTodo/ListTodo";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import AuthProvider from "./security/AuthContext";

export default function TodoApp() {
  return (
    <div className="TodoApp">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/todos" element={<ListTodo />} />
            <Route path="/" element={<LoginFrom />} />
            <Route path="/login" element={<LoginFrom />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/welcome/:username" element={<Welcome />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
