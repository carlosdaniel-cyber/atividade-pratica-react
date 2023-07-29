import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import productsData from '../data'

function ProductList() {
  return (
    <Container>
        <Row>
            {productsData.map((product => (
                <Card className='m-3' key={product.id} style={{ width: '18rem' }}>
                    <Card.Img  variant="top" src={product.img} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                        <Button variant="primary">${product.price}</Button>
                    </Card.Body>
                </Card>
            )))}
        </Row>
    </Container>
  );
}

export default ProductList;