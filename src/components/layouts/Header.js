import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Navbar, Form } from "react-bootstrap";
import PokemonContext from "../../store/PokemonContext";
import RegionPokemon from "./RegionPokemon";

const Header = () => {
  const location = useLocation().pathname;
  const pokemonContext = useContext(PokemonContext);
  const { filterPokemon, removeFilter } = pokemonContext;

  const [text, setText] = useState("");
  const [search, setSearch] = useState(false);

  useEffect(() => {
    if (text === "") removeFilter();
    // eslint-disable-next-line
  }, [text]);

  useEffect(() => {
    if (location === "/") {
      setSearch(true);
    } else {
      setSearch(false);
    }
  }, [location]);

  const onChange = ({ target: { value } }) => {
    setText(value);
    removeFilter();
    filterPokemon(text);
  };
  const clearText = () => {
    setText("");
    removeFilter();
  };
  return (
    <header>
      <Navbar className="w-100 header" expand="lg" varient="light">
        <Navbar.Brand>
          {" "}
          <Link to="/" className="text-white text-decoration-none">
            <i className="fas fa-home mx-2"></i>
            POKEMON API{" "}
          </Link>
        </Navbar.Brand>
        {search && (
          <>
            <Navbar.Toggle
              type="button"
              className="toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span style={{ color: "white" }} className="fas fa-bars"></span>
            </Navbar.Toggle>

            <Navbar.Collapse id="navbarScroll">
              <Form
                onSubmit={(e) => e.preventDefault()}
                className="d-flex my-1 mx-auto"
              >
                <div className="input-group">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="mr-2 from-control"
                    aria-label="Search"
                    value={text}
                    onChange={onChange}
                  ></Form.Control>
                </div>

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
