import "./App.css";
import { useRoutes } from "react-router-dom";
import Home from "./Home";
import ArrayMaps from "./components/ArrayMaps";
import SlotM from "./components/SlotM";
import UseState from "./components/UseState";
import InputOnChange from "./components/inputOnChange";
import FormOnChange from "./components/FormOnChange";
import TodoList from "./components/TodoList";
import QnaList from "./components/QnaList";
import GoogleKeepNotes from "./components/GoogleKeepNotes";
import UseContex from "./components/UseContex";
import UseEffect from "./components/UseEffect";
import Apicallcovid from "./components/apicall/Apicallcovid";
import Pokemonapi from "./components/apicall/Pokemonapi";
import Weatherapi from "./components/apicall/Weatherapi";
import UseParams from "./components/UseParams";
import UseLocation from "./components/UseLocation";
import LivesearchFilter from "./components/LivesearchFilter";
import UseReducer from "./components/UseReducer";

function App() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/arraymap",
      element: <ArrayMaps />,
    },
    {
      path: "/slotm",
      element: <SlotM />,
    },
    {
      path: "/usestate",
      element: <UseState />,
    },
    {
      path: "/inputonchange",
      element: <InputOnChange />,
    },
    {
      path: "/formonchange",
      element: <FormOnChange />,
    },
    {
      path: "/todolist",
      element: <TodoList />,
    },
    {
      path: "/qnalist",
      element: <QnaList />,
    },
    {
      path: "/googlekeepnotes",
      element: <GoogleKeepNotes />,
    },
    {
      path: "/usecontex",
      element: <UseContex />,
    },
    {
      path: "/useeffect",
      element: <UseEffect />,
    },
    {
      path: "/apicallcovid",
      element: <Apicallcovid />,
    },
    {
      path: "/pokemonapi",
      element: <Pokemonapi />,
    },
    {
      path: "/weatherapi",
      element: <Weatherapi />,
    },
    {
      path: "/useparam/*", // I use /* for trail it's child routes so it can contain inside routes
      element: <UseParams />,
    },
    {
      path: "/uselocation",
      element: <UseLocation />,
    },
    {
      path: "/livesearchfilter",
      element: <LivesearchFilter />,
    },
    {
      path: "/usereducer",
      element: <UseReducer />,
    },
  ]);
}

export default App;

// We can also do this
/* <>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/arraymap" element={<ArrayMaps />} />
  </Routes>
</> */
