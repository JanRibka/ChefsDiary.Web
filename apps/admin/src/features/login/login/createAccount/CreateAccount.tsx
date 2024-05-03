import { Link } from "react-router-dom";

import { AppRoutes } from "../../../../app/routes/appRoutes";

const CreateAccount = () => {
  return (
    <section>
      <div className="flex flex-col items-center mt-5">
        <p className="mb-2">
          Nemáte účet? <Link to={AppRoutes.Register}>Vytvořte si jej</Link>
        </p>
      </div>
    </section>
  );
};

export default CreateAccount;
