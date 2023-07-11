import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoMatch from "./NoMatch";
import PokemonDetails from "../components/PokemonDetails";
import Pokemons from "../components/PokemonList";
import Navigation from "../layout/navigation";
import WeatherDisplay from "../components/WeatherDisplay";
import SearchForm from "../components/SearchForm";

const Routeur = () => {
  return (
    <BrowserRouter>
      <Navigation>
        <Routes>
          <Route path="/" element={<Pokemons />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
          <Route path="/meteo" element={<WeatherDisplay />} />
          <Route path="/meteo/:name" component={SearchForm} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Navigation>
    </BrowserRouter>
  );
};

export default Routeur;
