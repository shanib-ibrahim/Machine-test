import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import UserForm from "./components/UserForm";
import Users from "./components/Users";

import { fetchUserData } from "./store/user-actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <Fragment>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/users" />} />
          <Route path="/users" element={<Users />} />
          <Route path="/userform" element={<UserForm />} />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
