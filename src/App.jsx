import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Teams from "./pages/Teams";
import Contacts from "./pages/Contacts";
import Invoices from "./pages/Invoices";
import User from "./pages/User";
import Calendar from "./pages/Calendar";
import Faq from "./pages/Faq";
import BarChart from "./pages/BarChart";
import PieChart from "./pages/PieChart";
import LineChart from "./pages/LineChart";
import GeoChart from "./pages/GeoChart";
import Dashboard from "./pages/Dashboard";
import Applayout from "./ui/Applayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Applayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="team" element={<Teams />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="invoice" element={<Invoices />} />
            <Route path="user" element={<User />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="faq" element={<Faq />} />
            <Route path="bar-chart" element={<BarChart />} />
            <Route path="pie-chart" element={<PieChart />} />
            <Route path="line-chart" element={<LineChart />} />
            <Route path="geo-chart" element={<GeoChart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
