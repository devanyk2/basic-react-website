import { useRouteError } from "react-router-dom";


export default function ErrorPage() {
  const unknown_val : any = useRouteError();
  const error_statusText: String =  typeof(unknown_val.statusText) === "string" ? unknown_val.statusText: "unknown error!";
  const error_message: String =  typeof(unknown_val.message) === "string" ? unknown_val.statusText: "unknown error!";

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error_statusText || error_message}</i>
      </p>
    </div>
  );
}