import AppTextField from "../../shared/styledComponents/textField/AppTextField";

const Home = () => {
  return (
    <div className="mx-2">
      <AppTextField
        value="2"
        name="sdf"
        label="Email"
        size="small"
        onBlur={() => {}}
      />
    </div>
  );
};

export default Home;
