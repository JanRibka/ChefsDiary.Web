import { AppRoutes } from "../../../../app/routes/appRoutes";
import AppAnchor from "../../../../shared/styledComponents/anchor/AppAnchor";

const CreateAccount = () => {
  return (
    <section>
      <div className="flex flex-col items-center mt-5">
        <p className="mb-2">
          Nemáte účet?{" "}
          <AppAnchor href={AppRoutes.Register}>Vytvořte si jej</AppAnchor>
        </p>
      </div>
    </section>
  );
};

export default CreateAccount;
