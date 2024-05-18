import { FunctionComponent } from "react";
import NavBar from "../components/NavBar";
import UsersSearch from "../components/UsersSearch";
import FooterContainer from "../components/FooterContainer";
import "./AdminPage.css";

const AdminPage: FunctionComponent = () => {
  return (
    <div className="admin-page">
      <NavBar />
      <div className="admin-page-heading-wrapper">
        <h1 className="admin-page-heading">Admin Page</h1>
      </div>
      <section className="admin-page-inner">
        <UsersSearch />
      </section>
      <FooterContainer />
    </div>
  );
};

export default AdminPage;
