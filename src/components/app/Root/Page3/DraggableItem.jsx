import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";

import Card from "./Card";
import update from "immutability-helper";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const Container = () => {
  {
    const classes = useStyles();

    const [cards, setCards] = useState([
      {
        id: 1,
        text: "Write a cool JS library"
      },
      {
        id: 2,
        text: "Make it generic enough"
      },
      {
        id: 3,
        text: "Write README"
      },
      {
        id: 4,
        text: "Create some examples"
      },
      {
        id: 5,
        text:
          "Spam in Twitter and IRC to promote it (note that this element is taller than the others)"
      },
      {
        id: 6,
        text: "???"
      },
      {
        id: 7,
        text: "PROFIT"
      }
    ]);
    const moveCard = (dragIndex, hoverIndex) => {
      const dragCard = cards[dragIndex];
      setCards(
        update(cards, {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]]
        })
      );
    };
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            {cards.map((card, i) => (
              <Card
                key={card.id}
                index={i}
                id={card.id}
                cardInfo={card}
                moveCard={moveCard}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
};
export default Container;
