import { Link } from "react-router-dom";

import { AppRoutes } from "../../../../app/routes/appRoutes";

const LoginUser = () => {
  return (
    <section>
      <div className="flex flex-col items-center mt-5">
        <p className="mb-2">
          Máte účet? <Link to={AppRoutes.Login}>Přihlašte se</Link>
        </p>
      </div>
    </section>
  );
};

export default LoginUser;
