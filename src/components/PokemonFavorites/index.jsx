import React from "react";
import { Container, ImagePokemon, ListPokemon, OrderList, Paragraph, ParagraphContainer, Span, Title } from "../List/style";
import { Navbar } from "../Navbar";

const KG_TO_GRAMS = 10;
const PRECISION = 1;

export const PokemonFavorites = ({ favorites }) => {

    console.log("Favorites received", favorites);


    return (
        <>
      <Navbar></Navbar>
       {/* <Container>
        {favorites.map((item) => {
            console.log("test", item);
            <OrderList key={item.order}>
              <ListPokemon>
                <ImagePokemon src={item.sprites} alt={item.name} />
                <Title>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Title>
                <ParagraphContainer>
                  <Paragraph>
                    <Span className="material-symbols-outlined">weight</Span>
                    {parseFloat((item.weight / KG_TO_GRAMS).toFixed(PRECISION))} kg
                  </Paragraph>
                  <Paragraph>
                    <Span className="material-symbols-outlined">height</Span>
                    {parseFloat((item.height / KG_TO_GRAMS).toFixed(PRECISION))} meters
                  </Paragraph>
                </ParagraphContainer>
              </ListPokemon>
            </OrderList>
        })}
      </Container> */}
    </>
  );
};