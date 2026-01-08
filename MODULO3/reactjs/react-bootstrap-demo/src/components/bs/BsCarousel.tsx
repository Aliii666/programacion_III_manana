import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
    return (
        <Carousel>
        <Carousel.Item>
            <div className="d-flex align-items-center justify-content-center"
                style={{ height: '300px', backgroundColor: '#343a40' }}>
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
            </div>
        </Carousel.Item>

        <Carousel.Item>
            <div className="d-flex align-items-center justify-content-center"
                style={{ height: '300px', backgroundColor: '#495057' }}>
            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
            </div>
        </Carousel.Item>

        <Carousel.Item>
            <div className="d-flex align-items-center justify-content-center"
                style={{ height: '300px', backgroundColor: '#6c757d' }}>
            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
            </Carousel.Caption>
            </div>
        </Carousel.Item>
        </Carousel>
    );
}

export default UncontrolledExample;