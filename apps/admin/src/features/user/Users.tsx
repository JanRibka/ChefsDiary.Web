import ContentSection from "../../shared/styledComponents/contentSection/ContentSection";
import UsersTable from "./usersTable/UsersTable";

const Users = () => {
  return (
    <div>
      <ContentSection>
        <UsersTable />
      </ContentSection>
    </div>
  );
};

export default Users;
