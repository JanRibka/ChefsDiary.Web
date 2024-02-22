import AppTextField from "../../shared/styledComponents/textField/AppTextField";

const Home = () => {
  return (
    <div className="mx-2">
      <AppTextField
        value="2"
        label="Email"
        onBlur={() => {}}
        size={"3"}
        variant="classic"
        placeholder="asdf"
        required
      />
    </div>
  );
};

export default Home;
