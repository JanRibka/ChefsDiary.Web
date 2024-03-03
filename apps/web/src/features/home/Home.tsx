import AppTextField from "../../shared/styledComponents/textField/AppTextField";

// TODO: Pokud zadám do prohlížeče nějakou stránku a přesměruje mě to na přihlášení, tak po přihlášení mě to musí vrátit tam, kde jsem chtěl původně jít
const Home = () => {
  return (
    <div className="mx-2">
      <AppTextField
        value="2"
        name="sdf"
        label="Email"
        size="small"
        variant="filled"
        onBlur={() => {}}
      />
    </div>
  );
};

export default Home;
