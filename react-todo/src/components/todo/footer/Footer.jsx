import { useContext } from "react";
import { AuthContext } from "../security/AuthContext";

export default function Footer() {

  const authContext = useContext(AuthContext);

  return (
    <footer className="footer">
      <div className="container">
        <hr />
        Footer
      </div>
    </footer>
  );
}
