import React from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';

const Loader = () => {
    return (
        <div
            className='d-flex justify-content-center mt-5'
            style={{ height: '100vh' }}>
            <Row>
                <Col>
                <Spinner animation="grow" variant="danger" />
                </Col>
            </Row>
            <Row>
                <Col>
                <div className='mx-3'>
                    <h2> Capturing Pokemon...</h2>
                </div>
                </Col>
            </Row>
        </div>
    )
}

export default Loader