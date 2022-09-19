import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function Ayuda() {
  return (
    <section>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 d-flex justify-content-center">
                    <h1 class="h2 text-center m-2">Preguntas frecuentes</h1>.
                </div>
            </div>
        </div>
        <Accordion defaultActiveKey="0" className='helpContainer'>
            <Accordion.Item eventKey="0">
                <Accordion.Header>¿Tienen stock?</Accordion.Header>
                <Accordion.Body>
                    Todos los productos publicados tienen stock
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>¿Sus productos tienen garantia?</Accordion.Header>
                <Accordion.Body>
                    Si, nuestros tienen garantia de 60 dias
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>¿Qué métodos de pago aceptan?</Accordion.Header>
                <Accordion.Body>
                    Aceptamos tarjetas de credito, debito, MercadoPago, deposito y transferencia
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>¿En cuánto tiempo tendré mi producto?</Accordion.Header>
                <Accordion.Body>
                    Nosotros despachamos el produducto dentro de las primeras 24hs que recibimos el pedido, la demora dependera del metodo de envio elegido por usted
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>Puedo cambiar el producto si no me quedo como esperaba?</Accordion.Header>
                <Accordion.Body>
                    Si, tienes un plazo de 7 dias una vez recibido el producto para poder cambiarlo
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </section>
  )
}

export default Ayuda