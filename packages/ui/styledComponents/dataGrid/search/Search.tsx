import AppSearchField from "../../searchField/AppSearchField";
import SearchProps from "./SearchProps";

const Search = (props: SearchProps) => {
  if (!props.search) {
    return undefined;
  }

  return (
    <div className="mb-4">
      <div className="w-full md:w-80">
        <AppSearchField
          label="Zadejte login, nebo email"
          name=""
          size="small"
        />
      </div>
    </div>
  );
};

export default Search;
