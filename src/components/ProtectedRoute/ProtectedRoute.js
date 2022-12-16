import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, children }) => {
  return (
    <Route>
      {
        () => (isLoggedIn ? children : <Redirect to="/" />)
      }
    </Route>
)}

export default ProtectedRoute;