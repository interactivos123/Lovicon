import React from 'react'
// import { ContenedorPadre } from '../../../theme'
import { ContenedorPadreEspecial, Container, Col1, Col2, Title, Subtitle, Text } from './styles'
import { Showrooms, Almacenes, ShopInShops, Outlets, PopUpStores, Franquicias, FlagShipStores, Bares, Restaurantes, Cafes } from '../../../icons'

const SectionFive = () => {
  return (
    <ContenedorPadreEspecial>
      <Container>
        <Col1>
          <Title>¿Qué puede construir con Lovicon?</Title>
          <Subtitle>¡Valor de marca!</Subtitle>
          <Text>
            Las tiendas físicas dan a los clientes un lugar para meterse dentro de la marca,
            olerla y tocarla. Es en la tienda donde se construye el valor de marca.
            <br /><br />
            <span>
              Explore múltiples formatos de tiendas, nosotros le ayudamos
              a diseñar y construir la más adecuada para su marca.
            </span>
          </Text>
        </Col1>
        <Col2>
          <section>
            <p>
              Explore múltiples formatos de tiendas, nosotros le ayudamos
              a diseñar y construir la más adecuada para su marca.
            </p>
            <div>
              <Showrooms />
              <h4>Showrooms</h4>
            </div>
            <div>
              <Almacenes />
              <h4>Almacenes</h4>
            </div>
            <div>
              <ShopInShops />
              <h4>Shop in shops</h4>
            </div>
            <div>
              <Outlets />
              <h4>Outlets</h4>
            </div>
            <div>
              <PopUpStores />
              <h4>Pop Up Stores</h4>
            </div>
            <div>
              <Franquicias />
              <h4>Franquicias</h4>
            </div>
            <div>
              <FlagShipStores />
              <h4>FlagShip Stores</h4>
            </div>
            <div>
              <Bares />
              <h4>Bares</h4>
            </div>
            <div>
              <Restaurantes />
              <h4>Restaurantes</h4>
            </div>
            <div>
              <Cafes />
              <h4>Cafés</h4>
            </div>
          </section>
        </Col2>
      </Container>
    </ContenedorPadreEspecial>
  )
}

export default SectionFive
