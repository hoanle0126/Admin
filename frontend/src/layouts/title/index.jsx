import { Helmet, HelmetProvider } from "react-helmet-async";

function Title() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Test</title>
        <link rel="shortcut icon" href="https://upload.wikimedia.org/wikipedia/vi/thumb/a/a1/Man_Utd_FC_.svg/1200px-Man_Utd_FC_.svg.png" type="image/x-icon" />
      </Helmet>
    </HelmetProvider>
  );
}

export default Title;
