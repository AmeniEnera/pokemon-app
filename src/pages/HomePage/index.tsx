import React, { useCallback, useEffect, useState } from "react";
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
import { calculateCardPrice } from "../../services/cards";
import CardFilters from "../../components/CardFilters";
import { Card } from "../../types/cards";
import { getCards } from "../../services/api";

const HomePage = () => {
  const dispatch = useDispatch();

  const cards = useSelector((state: RootState) => state.cards.data);
  const loading = useSelector((state: RootState) => state.cards.loading);
  const filters = useSelector((state: RootState) => state.cards.filters);
  const [filteredCards, setFilteredCards] = useState(cards);

  const applySort = useCallback(
    (filtered: Card[]) => {
      if (filters.sort === "asc") {
        setFilteredCards(
          [...filtered].sort(
            (a, b) => calculateCardPrice(a) - calculateCardPrice(b)
          )
        );
      } else if (filters.sort === "desc") {
        setFilteredCards(
          [...filtered].sort(
            (a, b) => calculateCardPrice(b) - calculateCardPrice(a)
          )
        );
      }
    },
    [filters.sort]
  );

  useEffect(() => {
    const filtered = cards.filter((card) => {
      return (
        (filters.rarity.length === 0 ||
          !card.rarity ||
          filters.rarity.includes(card.rarity)) &&
        (filters.types.length === 0 ||
          card.types.every((element) => filters.types.includes(element)))
      );
    });

    setFilteredCards(filtered);
    applySort(filtered);
  }, [cards, filters, applySort]);

  useEffect(() => {
    const getCardsInformations = async () => {
      let card = await getCards();
      if (card) {
        dispatch(fetchCardsSuccess(card));
      } else {
        dispatch(fetchCardsFailure("Failed to fetch cards."));
      }
    };

    if (cards.length === 0) {
      dispatch(fetchCardsRequest());
      getCardsInformations();
    }
  }, [dispatch, cards]);

  return (
    <HomePageContainer>
      {loading ? (
        <PokeballLoader />
      ) : (
        <Grid container>
          <Grid item xs={12}>
            <CardFilters />
          </Grid>
          <Grid item container spacing={2}>
            {filteredCards.map((card) => (
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
        </Grid>
      )}
    </HomePageContainer>
  );
};

export default HomePage;
