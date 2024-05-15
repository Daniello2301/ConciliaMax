import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import NewConciliation from "../Pages/NewConciliation";
import ListHistory from "../Pages/ListHistory";
import ListConciliations from "../Pages/ListConciliations";

function RoutesDashboard() {


  return (
    <>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/new-conciliation" element={<NewConciliation />} />
            <Route path="/conciliations" element={<ListConciliations />} />
            <Route path="/history" element={<ListHistory />} />
          </Routes>
    </>
  );
}

export default RoutesDashboard;
