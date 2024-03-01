import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
    
      <h2>Oops!! Error</h2>
      <h3>Error Status {error.status}</h3>
      <h4>Error Status {error.data}</h4>
    </>
  );
};

export default Error;
