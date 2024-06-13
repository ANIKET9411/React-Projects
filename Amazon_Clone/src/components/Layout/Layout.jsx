import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Layout({ children }) {
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}
export default Layout;
