import { Row, Col, Form, } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import "./search.css"

function Search() {
    return (
        <Row style={{ marginBottom: "20px" }}>
            <Col md={12} lg={6} >
                <p className="text-header">Place List</p>
            </Col>
            <Col md={12} lg={2}>
                <Form.Select size="sm" aria-label="Default select example"
                    style={{
                        height: "40px",
                        left: "789px",
                        top: "80px",
                        background: "#ffffff",
                        border: "1px solid #134b8a",
                        box: "border-box",
                        borderRadius: "50px",
                    }}
                >
                    <option> Restaurent</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>

                </Form.Select>
            </Col >
            <Col md={12} lg={4}>

                <Form.Control size="sm" type="text" placeholder=" Search name... "
                    style={{
                        height: "40px",
                        left: "789px",
                        top: "80px",
                        background: "#ffffff",
                        border: "1px solid #134b8a",
                        box: "border-box",
                        borderRadius: "50px",
                    }}
                />
            </Col>
        </Row >
    );
}

export default Search;
