import {
  validateCustomChar,
  validateLowerUpperCase,
  validateLowerUpperCaseNumbers,
  validateMinMaxLength,
} from "@repo/shared/validations";

import DescribedByAreaItem from "../../../../../shared/styledComponents/describedByAreaItem/DescribedByAreaItem";
import DescribedByAreaWrapper from "../../../../../shared/styledComponents/describedByAreaWrapper/DescribedByAreaWrapper";

interface Props {
  login: string;
}

const LoginDescribedByArea = (props: Props) => {
  const firstLetter = props.login.charAt(0);

  return (
    <DescribedByAreaWrapper>
      <>
        <DescribedByAreaItem
          itemValid={validateMinMaxLength(props.login, 4, 24)}
        >
          Musí obsahovat 4 až 24 znaků
        </DescribedByAreaItem>
        <DescribedByAreaItem itemValid={validateLowerUpperCase(firstLetter)}>
          Musí začínat písmenem
        </DescribedByAreaItem>

        <DescribedByAreaItem
          itemValid={
            validateLowerUpperCaseNumbers(props.login) ||
            validateCustomChar(props.login, "-_")
          }
        >
          Může obsahovat čísla a podtržítko
        </DescribedByAreaItem>
      </>
    </DescribedByAreaWrapper>
  );
};

export default LoginDescribedByArea;
