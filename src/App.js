import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import DefaultLayout from './layouts/DefaultLayout';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={
          <LoginAuth>
            <AuthLayout />
          </LoginAuth>
          } />
          <Route
            path="/*"
            element={
              <RequireAuth>
                <DefaultLayout />
              </RequireAuth>
            }
          />
          <Route path="*" element={<div>adfdff</div>} />
        </Routes>
      </Router>
    </div>
  );
}

function RequireAuth({children}) {
  // let auth = useSelector(selectLoggedIn);
  let auth = true;

  let location = useLocation();

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function LoginAuth({children}) {
  // let auth = useSelector(selectLoggedIn);
  let auth = true;

  let location = useLocation();

  if (auth) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}


export default App;
