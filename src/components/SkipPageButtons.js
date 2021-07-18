import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const SkipPageButtons = ({ page }) => {
  return (
    <Card.Text
      style={{
        position: "relative",
        top: "50px",
        justifyContent: "space-between",
      }}
      className="d-flex my-4"
    >
      <Link
        to={`/pokemon/${
          parseInt(page) > 1 ? parseInt(page) - 1 : parseInt(page)
        }`}
        className="mx-3 btn btn-danger"
      >
        <i className="fas fa-arrow-left mx-2"></i>
      </Link>
      <Link
        to={`/pokemon/${
          parseInt(page) < 1020 ? parseInt(page) + 1 : parseInt(page)
        }`}
        className="mx-3 btn btn-danger"
      >
        <i className="fas fa-arrow-right mx-2"></i>
      </Link>
    </Card.Text>
  );
};

export default SkipPageButtons;
