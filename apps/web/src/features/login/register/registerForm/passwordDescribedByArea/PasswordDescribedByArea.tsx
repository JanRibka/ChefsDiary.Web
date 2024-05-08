import {
  validateLowerCase,
  validateMinMaxLength,
  validateNumbers,
  validateUpperCase,
} from "@repo/shared/validations";

import DescribedByAreaItem from "../../../../../shared/styledComponents/describedByAreaItem/DescribedByAreaItem";
import DescribedByAreaWrapper from "../../../../../shared/styledComponents/describedByAreaWrapper/DescribedByAreaWrapper";

interface Props {
  password: string;
}

const PasswordDescribedByArea = (props: Props) => {
  return (
    <DescribedByAreaWrapper>
      <>
        <DescribedByAreaItem
          itemValid={validateMinMaxLength(props.password, 8, 24)}
        >
          Musí obsahovat 8 až 24 znaků
        </DescribedByAreaItem>
        <DescribedByAreaItem itemValid={validateUpperCase(props.password)}>
          Musí obsahovat velká písmena
        </DescribedByAreaItem>
        <DescribedByAreaItem itemValid={validateLowerCase(props.password)}>
          Musí obsahovat malá písmena
        </DescribedByAreaItem>
        <DescribedByAreaItem itemValid={validateNumbers(props.password)}>
          Musí obsahovat čísla
        </DescribedByAreaItem>
      </>
    </DescribedByAreaWrapper>
  );
};

export default PasswordDescribedByArea;
