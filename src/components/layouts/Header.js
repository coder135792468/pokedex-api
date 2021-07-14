import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Navbar, Button, Form, FormControl } from "react-bootstrap";
import PokemonContext from "../../reducers/PokemonContext";
const Header = () => {
  const pokemonContext = useContext(PokemonContext);
  const { filterPokemon, removeFilter, search } = pokemonContext;

  const [text, setText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!text) {
      removeFilter();
    }
    filterPokemon(text);

    setText("");
  };
  return (
    <header style={{ position: "sticky", top: "0", zIndex: "2" }}>
      <Navbar bg="primary" expand="lg" varient="dark">
        <Navbar.Brand>
          {" "}
          <Link to="/" className="text-white text-decoration-none">
            <i className="fas fa-home mx-.5"></i>
            POKEMON API{" "}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        {search && (
          <Navbar.Collapse id="navbarScroll">
            <Form onSubmit={submitHandler} className="d-flex my-1 mx-auto">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <Button variant="outline-success" className="btn btn-light">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        )}
      </Navbar>
    </header>
  );
};

export default Header;
