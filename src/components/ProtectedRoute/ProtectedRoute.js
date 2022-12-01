import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, children }) => {
  return (
    <Route>
      {
        () => (isLoggedIn ? children : <Redirect to="./signin" />)
      }
    </Route>
)}

export default ProtectedRoute;