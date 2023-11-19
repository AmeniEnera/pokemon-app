import React from "react";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../modules/reducers";
import {
  AttacksTable,
  Container,
  Image,
  Info,
  StyledButton,
} from "./CardInformations.styles";
import { useDispatch } from "react-redux";
import { addCard } from "../../modules/actions/cards";

const CardInformations = () => {
  const { id } = useParams();
  const card = useSelector((state: RootState) =>
    state.cards.data.find((card) => card.id === id)
  );

  const dispatch = useDispatch();

  if (!card) {
    return null;
  }
  return (
    <Container>
      <Image>
        <img src={card.images.small} alt={card.name} />
        <StyledButton
          variant="contained"
          onClick={() => dispatch(addCard(card))}
        >
          Add to cart
        </StyledButton>
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
