import { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom"
import { Header } from "./components/Header";
import { AuthContext } from "./contexts/AuthContext";
import { Protected } from "./pages/Protected";
import { Login } from "./pages/Login"
import { NoMatch } from "./pages/NoMatch";
import { Public } from "./pages/Public";

function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useContext(AuthContext);
  let location = useLocation();
  
  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />} >
          <Route path='login' element={<Login />}></Route>
          <Route path='public' element={<Public />}></Route>
          <Route path='protected' element={
            <RequireAuth><Protected /></RequireAuth>
          }></Route>
        </Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
