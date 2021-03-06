import React from 'react';
import { Row, Col, Container, Button, Pagination, Modal } from 'react-bootstrap';
import MultiImageInput from 'react-multiple-image-input';
import './ImageGallery.css';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const crop = {
    unit: '%',
    aspect: 4 / 4,
    width: '100'
};

export default class Tiles extends React.Component {

    state = {
        limit: 10,
        page: 1,
        totalPages: 0,
        showModal: false
    }

    // hiddenImageInput = React.createRef(null);

    // handleClickImage = event => {
    //     this.hiddenImageInput.current.click();
    // };
    // handleChangeImage = async event => {


    //     const fileUploaded = event.target.files[0];
    //     event.target.value=null;
    //     this.setState({loader:true})
    //     //await new Promise((resolve) => setTimeout(resolve, 2000));

    //     const objectUrl = URL.createObjectURL(fileUploaded)
    //     await this.props.addImage(objectUrl);

    //     this.setState({loader:false})

    //     // window.alert("Set State for Resume")
    // };

    showModal = () => {
        this.setState({ showModal: true })
    }

    handleClose = () => {
        this.setState({ showModal: false })
    }

    saveUploads = () => {
        this.props.saveImages()

        this.handleClose()
    }


    render() {
        return (
            <div style={{ backgroundColor: "#eaeaea", minHeight: "100vh", overflow: "hidden" }}>
                {this.state.showModal ? (
                    <Modal show={this.state.showModal} onHide={this.handleClose} animation={false} size="lg">
                        <Modal.Header closeButton>
                            <Modal.Title>Upload Multiple Photos</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <MultiImageInput
                                style={{ border: "0px" }}
                                images={this.props.newImages}
                                setImages={this.props.setnewImages}
                                cropConfig={{ crop, ruleOfThirds: true }}
                                theme="light"
                                max={5}
                            //   cropConfig={{ crop, ruleOfThirds: true }}
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                      </Button>
                            <Button style = {{backgroundColor: "#1861bf"}} onClick={this.saveUploads}>
                                Save Changes
                      </Button>
                        </Modal.Footer>
                    </Modal>
                ) : null}
                <Container style={{ marginTop: "20px", width: "90%", backgroundColor: "white" }} className="block-example border">
                    <Row style={{ height: "50px", marginTop: "20px" }}>
                        <Col>
                            <h4><b>{this.props.companyName}</b></h4>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: "10px" }}>
                        <Col md="8">
                            <div>
                                <Nav className="mr-auto">
                                    <div className="box-content right">
                                        <Link to={{ pathname: "/overview", state: this.props._id }} style={{ textDecoration: 'none', color: '#1861bf' }}>Overview</Link>
                                    </div>
                                    <div class="box-content right">
                                        <Link to={{ pathname: "/reviews", state: this.props._id }} style={{ textDecoration: 'none', color: '#1861bf' }}>Reviews</Link>
                                    </div>
                                    <div class="box-content right">
                                        <Link to={{ pathname: "/jobs", state: this.props._id }} style={{ textDecoration: 'none', color: '#1861bf' }}>Jobs</Link>
                                    </div>
                                    <div class="box-content right">
                                        <Link to={{ pathname: "/salaries", state: this.props._id }} style={{ textDecoration: 'none', color: '#1861bf' }}>Salaries</Link>
                                    </div>
                                    <div class="box-content right">
                                        <Link to={{ pathname: "/interviews", state: this.props._id }} style={{ textDecoration: 'none', color: '#1861bf' }}>Interviews</Link>
                                    </div>
                                    <div class="box-content">
                                        <Link to="/photos" style={{ textDecoration: 'none', color: '#1861bf' }}>Photos</Link>
                                    </div>
                                </Nav>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container style={{ backgroundColor: "#fff", marginTop: "20px", padding: "20px " }}>
                    <Row style={{ width: "78%", margin: "auto", marginBottom: "20px" }}>
                        <Col md="6">
                            <h4>{this.props.companyName} Office Photos</h4>
                        </Col>
                        <Col md="6" >
                            <div style={{ float: "right" }}>
                                <Button onClick={this.showModal} style = {{backgroundColor: "#1861bf"}}>
                                    + Add Photos
                                </Button>
                                {/* <input type="file"
                                                    ref={this.hiddenImageInput}
                                                    onChange={this.handleChangeImage}
                                                    style={{ display: 'none' }}
                                                /> */}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <div className="tiles">
                            {this.props.data.map((data) => {
                                return <Tile data={data} key={data.id} />
                            })}
                        </div>
                    </Row>
                    {/* <Row >
                        <Col md="12" >


                            <Pagination style={{ justifyContent: "center" }}>

                                <Pagination.Prev />
                                <Pagination.Item active>{1}</Pagination.Item>

                                <Pagination.Item>{2}</Pagination.Item>
                                <Pagination.Item>{3}</Pagination.Item>

                                <Pagination.Next />
                            </Pagination>
                        </Col>
                    </Row> */}
                </Container>
            </div>
        );
    }
}

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            mouseOver: false
        };


        this._clickHandler = this._clickHandler.bind(this);
        this._mouseEnter = this._mouseEnter.bind(this);
        this._mouseLeave = this._mouseLeave.bind(this);
    }


    _mouseEnter(e) {
        e.preventDefault();
        if (this.state.mouseOver === false) {
            this.setState({
                mouseOver: true
            })
        }
    }

    _mouseLeave(e) {
        e.preventDefault();
        if (this.state.mouseOver === true) {
            this.setState({
                mouseOver: false
            })
        }
    }

    _clickHandler(e) {
        e.preventDefault();
        if (this.state.open === false) {
            this.setState({
                open: true
            });
        } else {
            this.setState({
                open: false
            });
        }
    }

    render() {
        // console.log(this.props)
        let tileStyle = {};
        if (this.state.open) {
            tileStyle = {
                width: '62vw',
                height: '62vw',
                position: 'absolute',
                top: '50%',
                left: '50%',
                margin: '0',
                marginTop: '-31vw',
                marginLeft: '-31vw',
                boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
                transform: 'none'
            };
        } else {
            tileStyle = {
                width: '18vw',
                height: '18vw'
            };
        }

        return (
            <div className="tile">
                <img
                    onMouseEnter={this._mouseEnter}
                    onMouseLeave={this._mouseLeave}
                    onClick={this._clickHandler}
                    src={this.props.data.photoURL}
                    alt={this.props.data.name}
                    style={tileStyle}
                />
            </div>
        );
    }
}