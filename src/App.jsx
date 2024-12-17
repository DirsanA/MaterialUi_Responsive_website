import NavBar from "./Componets/NavBar";
const arrayLinks = ["Products", "Servicess", "Overview", "Contact us"];
const App = () => {
  return (
    <div>
      <NavBar links={arrayLinks} />
    </div>
  );
};

export default App;
