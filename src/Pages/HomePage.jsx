import Aside from "../Components/Aside";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import RoutesDashboard from "../Components/RoutesDashboard";

function HomePage() {
  return (
    <>
      <Nav />
      <Aside />

      <main className="grid h-screen items-center">
        <RoutesDashboard />
      </main>

      <Footer />
    </>
  );
}

export default HomePage;
