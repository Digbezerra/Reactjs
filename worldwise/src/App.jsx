import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CitiesProvider } from "./context/CitiesContext";
import { FakeAuthProvider } from "./context/fakeAuthContext";
import { lazy } from "react";
import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute";

// import AppLayout from "./pages/AppLayout/AppLayout";
// import HomePage from "./pages/HomePage/Homepage";
// import Product from "./pages/Product/Product";
// import Pricing from "./pages/Pricing/Pricing";
// import PageNotFound from "./pages/PageNotFound";

import "./index.css";
import Login from "./pages/Login/Login";
import CityList from "./components/City/CityList";
import CountryList from "./components/Country/CountryList";
import City from "./components/City/City";
import Form from "./components/Form/Form";
import SpinnerFullPage from "./components/Spinner/SpinnerFullPage";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const AppLayout = lazy(() => import("./pages/AppLayout/AppLayout"));
const Product = lazy(() => import("./pages/Product/Product"));
const Pricing = lazy(() => import("./pages/Pricing/Pricing"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <FakeAuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<HomePage />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </FakeAuthProvider>
  );
}

export default App;

// "@types/react": "^18.2.15",
// "@types/react-dom": "^18.2.7",
// "@vitejs/plugin-react": "^4.0.3",
// "eslint": "^8.45.0",
// "eslint-plugin-react": "^7.32.2",
// "eslint-plugin-react-hooks": "^4.6.0",
// "eslint-plugin-react-refresh": "^0.4.3",
// "vite": "^4.4.5"
