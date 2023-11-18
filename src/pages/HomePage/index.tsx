import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCardsFailure,
  fetchCardsRequest,
  fetchCardsSuccess,
} from "../../modules/actions/cards";
import { RootState } from "../../modules/reducers";
import { Grid } from "@mui/material";
import PokemonCard from "../../components/PokemonCard";
import PokeballLoader from "../../components/PokeballLoader";
import { HomePageContainer, PokemonCardContainer } from "./HomePage.styles";
import { getCards } from "../../services/cards";

const HomePage = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state: RootState) => state.cards.data);
  const loading = useSelector((state: RootState) => state.cards.loading);
  const error = useSelector((state: RootState) => state.cards.error);

  const getCardsInformations = async () => {
    let card = await getCards();
    if (card) {
      dispatch(fetchCardsSuccess(card));
    } else {
      dispatch(fetchCardsFailure("Failed to fetch cards."));
    }
  };

  useEffect(() => {
    if (cards.length === 0) {
      dispatch(fetchCardsRequest());
      getCardsInformations();
    }
  }, [dispatch, cards]);

  return (
    <HomePageContainer id="HomePageContainer">
      {loading ? (
        <PokeballLoader />
      ) : (
        <Grid container spacing={2}>
          {cards.map((card) => (
            <PokemonCardContainer
              item
              key={card.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
            >
              <PokemonCard card={card} />
            </PokemonCardContainer>
          ))}
        </Grid>
      )}
    </HomePageContainer>
  );
};

export default HomePage;
