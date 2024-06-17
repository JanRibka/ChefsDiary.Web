import { useEffect, useState } from "react";

import { PaginatedData } from "@repo/shared/entities";
import { nameof } from "@repo/shared/helpers";

// import { TableRowDefinition } from '@repo/ui/styledComponents';
import User from "../../../../entities/user/User";
import { useGetAllQuery } from "../../user/userApi";

const useGetAllUsersPaginated = () => {
  // Api
  const { data, isLoading, isFetching, refetch } = useGetAllQuery();

  // State
  const [paginatedUsers, setPaginatedUsers] = useState<PaginatedData<User>>(
    new PaginatedData<User>()
  );
  // const [paginatedUsers, setPaginatedUsers] = useState<
  //   PaginatedData<TableRowDefinition>
  // >(new PaginatedData<TableRowDefinition>());

  // Get users
  useEffect(() => {
    if (isLoading || isFetching) {
      return;
    }

    if (data) {
      // const rows = mapUserToTableRowDefinition(data.data);
      // const newData = { ...data, data: rows };

      // setPaginatedUsers(newData);
      setPaginatedUsers(data);
    }
  }, [isLoading, isFetching]);

  // const mapUserToTableRowDefinition = (users: User[]): TableRowDefinition[] => {
  //   return users.map(
  //     (u) =>
  //       new TableRowDefinition({
  //         [nameof<User>("uuid")]: u.uuid,
  //         [nameof<User>("login")]: u.login,
  //         [nameof<User>("isDisabled")]: u.isDisabled,
  //         [nameof<User>("email")]: u.email,
  //         [nameof<User>("createdAt")]: u.createdAt.toString(),
  //       })
  //   );
  // };

  return {
    paginatedUsers,
    isLoading,
    isFetching,
    refetch,
  };
};

export default useGetAllUsersPaginated;
