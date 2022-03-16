import { Card, Row, Col, } from "react-bootstrap";
import { BsCalendar3 } from "react-icons/bs";
import { BsFillCircleFill } from "react-icons/bs";
import "./carditem.css";

function Carditem(props) {
    const { name, profile_image_url, images, rating, operation_time } = props.marketList;

    return (
        <Col>
            <Card style={{
                background: "#FFFFFF",
                boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px"
            }}>
                <Card.Img className="profile-img-mobile" variant="top" src={profile_image_url} />
                <Row className="row-title">
                    <Col lg={3} md={12} xs={12}>
                        <Card.Img variant="top" className="profile-img"
                            src={profile_image_url} />
                    </Col>
                    <Col lg={9} md={12} xs={12} className="text-title">
                        <h5>{name}</h5>
                        <Row>
                            <Col md={12} style={{ display: "flex", justifyContent: "space-between" }}>
                                <small><BsCalendar3 /> {operation_time[0].time_open} น. - {operation_time[0].time_close} น.</small>
                                <span><BsFillCircleFill className="icon-rate" /> {rating}</span>

                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Card.Body>
                    <Row style={{ padding: "16px" }}>
                        {Array.from({ length: images.length }).map((_, idx) => (
                            <Col style={{ padding: "0px" }}>
                                <Card.Img variant="top" className="product-img" src={images[idx]} />
                            </Col>
                        ))}
                    </Row>

                </Card.Body>
            </Card>
        </Col>

    );
}

export default Carditem;
