import React from "react";
import ErrorPage from "../components/ErrorPage";

const NotFoundPage = () => (
  <ErrorPage errorCode="404" message="Nos perdimos❓" />
);

export default NotFoundPage;
