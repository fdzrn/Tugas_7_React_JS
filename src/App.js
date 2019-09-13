import React, {Component} from 'react';
import {Container, Row, Col, Alert, Button, Badge, Breadcrumb, Card, Media} from 'react-bootstrap'
class App extends Component {
  render(){
    return(
     <Container>
      <Row>
        <Col>
          <Alert variant="primary">Website React Bootstrap</Alert>
        </Col>
        <Col md="auto">
          <Button variant="primary">
            Notifications <Badge variant="light">9</Badge>
            <span className="sr-only">unread messages</span>
          </Button>
          <Button variant="primary">
            Messages <Badge variant="light">19</Badge>
            <span className="sr-only">unread messages</span>
          </Button>
        </Col>
        <Col xs lg="2">
          <Media>
            <img
              width={25}
              height={25}
              className="mr-3"
              src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg"
              alt="User Icon"
            />
            <Media.Body>
              <h5>Andreas</h5>
            </Media.Body>
          </Media>
        </Col>
      </Row>
      <Row>
        <Col md={4}></Col>
        <Col md={{ span: 4, offset: 4 }}>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Berita</Breadcrumb.Item>
            <Breadcrumb.Item active>Bola</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: '250px' }}>
            <Card.Img variant="top" src="https://cdn0-production-images-kly.akamaized.net/dclUbDLZVVR0YbwDB9pA7_6wDI4=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2887339/original/076433900_1566296335-20190820_154700.jpg" />
            <Card.Body>
              <Card.Title>Pemain Asing Baru Asal Belanda Akan Menggantikan Peran Malisic</Card.Title>
              <Card.Text>
                Nick Kuipers adalah pemain sepak bola profesional Belanda yang saat ini bermain sebagai bek tengah untuk Persib Bandung. Dia sebelumnya bermain untuk MVV Maastricht dan ADO Den Haag
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '250px' }}>
            <Card.Img variant="top" src="https://cdn0-production-images-kly.akamaized.net/DMtuI-0aUQcjDlzBxjuM3YKRmhg=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2887402/original/091269500_1566299876-20190820_154747.jpg" />
            <Card.Body>
              <Card.Title>Pemain Asing Baru Asal Belanda Akan memperkuat Persib Bandung</Card.Title>
              <Card.Text>
                Kevin van Kippersluis adalah pemain sepak bola profesional Belanda yang saat ini bermain sebagai gelandang serang untuk Persib Bandung di Liga Indonesia 1. Dia sebelumnya bermain untuk FC Utrecht dan Excelsior.
              </Card.Text>
              <Button variant="primary">Read more</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '250px' }}>
            <Card.Img variant="top" src="https://cdn0-production-images-kly.akamaized.net/cJGIQU1u6AteFBbC4IHnwXLldbg=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2887191/original/016201000_1566290947-IMG-20190820-WA0023.jpg" />
            <Card.Body>
              <Card.Title>Pemain Naturalisasi ini akan Mengisi Slot Pemain Asing Asia</Card.Title>
              <Card.Text>
              Omid Nazari adalah seorang pemain sepak bola Iran kelahiran Swedia keturunan Filipina yang saat ini bermain untuk Persib Bandung di Liga 1 dan sebelumnya bermain di timnas Iran. Saudaranya, Amin juga bermain untuk klub Omid sebelumnya, Malmö FF di Allsvenskan.
              </Card.Text>
              <Button variant="primary">Read more</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '250px' }}>
            <Card.Img variant="top" src="https://static.pikiran-rakyat.com/public/medium/public/2019/08/YdTk5gShkdX0MciXGPQXZwV76ksYMfSDA3FN5HQV.jpeg" />
            <Card.Body>
              <Card.Title>Rela Keluar Dari PSS Sleman untuk Bergabung bersama Persib</Card.Title>
              <Card.Text>
                hika Bayangkara merupakan pemain sepak bola Indonesia yang sekarang memperkuat PS TNI di Indonesia Soccer Championship A. Sosok yang tegas di lapangan merupakan karakter yang ditunjukannya sebagai penjaga gawang.
              </Card.Text>
              <Button variant="primary">Read more</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    );
  }
}
export default App;
