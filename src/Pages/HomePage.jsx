
import Aside from "../Components/Aside";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import RoutesDashboard from "../Components/RoutesDashboard";

function HomePage() {

  return (
    <>
      <Nav />
      <Aside />

      <div className="">

        <RoutesDashboard />

      </div>

      <Footer />
    </>
  );
}

export default HomePage;
