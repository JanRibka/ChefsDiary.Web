import AppTextField from "../../shared/styledComponents/textField/AppTextField";

// TODO: Pokud zadám do prohlížeče nějakou stránku a přesměruje mě to na přihlášení, tak po přihlášení mě to musí vrátit tam, kde jsem chtěl původně jít
const Home = () => {
  return (
    <div className="mx-2">
      <AppTextField
        name="sdf"
        size="small"
        variant="standard"
        label="Email"
        onBlur={() => {}}
      />
    </div>
  );
};

export default Home;
