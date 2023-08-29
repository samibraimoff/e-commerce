import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            E-Comm &copy;{currentYear} year.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
