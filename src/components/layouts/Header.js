import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Navbar, Button, Form } from "react-bootstrap";
import PokemonContext from "../../reducers/PokemonContext";
import RegionPokemon from "./RegionPokemon";
const Header = () => {
  const pokemonContext = useContext(PokemonContext);
  const { filterPokemon, removeFilter, filter } = pokemonContext;

  const [text, setText] = useState("");
  const [search, setSearch] = useState(false);
  // console.log(window.location.pathname);
  const location = useLocation().pathname;
  useEffect(() => {
    if (filter == null) {
      setText("");
    }
  }, [filter]);
  useEffect(() => {
    if (location === "/") {
      setSearch(true);
    } else {
      setSearch(false);
    }
  }, [location]);
  const submitHandler = (e) => {
    e.preventDefault();

    removeFilter();
    filterPokemon(text);
    setText("");
  };
  const clearText = () => {
    setText("");
    removeFilter();
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
        {search && (
          <>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Form onSubmit={submitHandler} className="d-flex my-1 mx-auto">
                <div className="input-group">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="mr-2 from-control"
                    aria-label="Search"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  ></Form.Control>
                </div>
                <Button variant="outline-success" className="btn btn-light">
                  Search
                </Button>
                <RegionPokemon clearText={clearText} />
              </Form>
            </Navbar.Collapse>
          </>
        )}
      </Navbar>
    </header>
  );
};

export default Header;
