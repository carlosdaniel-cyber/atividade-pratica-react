// CartModal.js
import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';

const CartModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Recupera os itens do localStorage quando o componente é montado
    const items = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(items);
  }, []);

  const getTotalPrice = () => {
    // Calcula o total da compra somando o preço de todos os produtos no carrinho
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Abrir Carrinho
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Carrinho de Compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.length === 0 ? (
            <p>O carrinho está vazio.</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <h3>{item.name}</h3>
                  <p>Preço: ${item.price.toFixed(2)}</p>
                </li>
              ))}
            </ul>
          )}
          <h3>Total da Compra: ${getTotalPrice().toFixed(2)}</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CartModal;
