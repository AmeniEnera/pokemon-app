import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../modules/reducers";
import {
  AttacksTable,
  Container,
  Image,
  Info,
  QuantityUpdaterContainer,
  StyledButton,
} from "./CardInformations.styles";
import { useDispatch } from "react-redux";
import { addCard } from "../../modules/actions/cards";
import QuantityUpdater from "../../components/QuantityUpdater";

const CardInformations = () => {
  const { id } = useParams();
  const card = useSelector((state: RootState) =>
    state.cards.data.find((card) => card.id === id)
  );

  const dispatch = useDispatch();

  const items = useSelector((state: RootState) => state.shoppingCart.items);

  useEffect(() => {
    // Scroll to the top at page render
    window.scrollTo(0, 0);
  }, []);

  if (!card) {
    return <h2> Card not found !</h2>;
  }

  const cardItem = items.find((item) => item.card.id === card.id);

  return (
    <Container>
      <Image>
        <img src={card.images.small} alt={card.name} />
        {!cardItem || cardItem.quantity === 0 ? (
          <StyledButton
            variant="contained"
            onClick={() => dispatch(addCard(card))}
          >
            Add to cart
          </StyledButton>
        ) : (
          <QuantityUpdaterContainer>
            <QuantityUpdater item={cardItem} />
          </QuantityUpdaterContainer>
        )}
      </Image>

      <Info>
        <h2>{card.name}</h2>
        {card.rarity && <p>Rarity: {card.rarity}</p>}
        {card.hp && <p>HP: {card.hp}</p>}
        <h3>Attacks</h3>
        <AttacksTable>
          <thead>
            <tr>
              <th>Name</th>
              <th>Cost</th>
              <th>Damage</th>
              <th>Text</th>
            </tr>
          </thead>
          <tbody>
            {card.attacks.map((attack, index) => (
              <tr key={index}>
                <td>{attack.name}</td>
                <td>{attack.cost.join(", ")}</td>
                <td>{attack.damage}</td>
                <td>{attack.text}</td>
              </tr>
            ))}
          </tbody>
        </AttacksTable>
      </Info>
    </Container>
  );
};

export default CardInformations;
