# The Wanderer

Wanderer is not just an ordinary game. It features a captivating storyline spanning three towns: Flare Town, Aeors, and Storm Gate, each populated with unique characters. Built on the Sui blockchain, it immerses players in a world of decisions and trading offering an engaging and novel way to interact with the platform.

Repository Guide:
- Move Files : Contain the code for the smart contract deployed on the blockchaiin.
- Game
  - src/App.jsx : Code for screen navigation
  - src/home.jsx : The landing page for the website, and initialising game state, before starting.
  - src/game.jsx : This is the actual game code whose components can be accessed in the components/game folder. For example "Card.jsx" holds the decision making mechanism and the displaying of characters.
  - src/how.jsx : This is a guide on how to play the game.
  - src/market.jsx : This is code for the marketplace, which utilises SUI blockchain to aid players to trade items among them.
    - getList and getAllList are functions used to fetch the listed items for sale on the blockchain utilising client.getObject().
    - Item Component
      - buyHandler:  Handles the buy mechanism and uses "::my_module::buy" from the smart contract.
      - sellHandler: Handles the sell mechnaism  and use "::my_module::list_item" from the smart contract (list items for selling).
    - Connect Component: To redirect user to sign in by Google Auth using Enoki flow to complete the zkLogin process.
- src/Files/data : cards data for game 
  - for each city we have cards.json and character.json to hold the card data (text and effects) and the characters informtion.
This project was submitted for SUI Blockchain Hackathon
