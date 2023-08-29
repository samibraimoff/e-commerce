import { Container } from "react-bootstrap";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to E-Comm website</h1>
        </Container>
      </main>
      <Footer />
    </Fragment>
  );
};

export default App;
