import { colors } from "../../properties";
import CircleIcon from "../icons/CircleIcon";
import Plus from "../icons/Plus";
import ContainerPaddingLeft from "../UI/ContainerPaddingLeft";
import { withTranslation } from 'react-i18next';

const Advantages = (t) => (
  <div className="col-12 paddingTopM">
    <CircleIcon>
      <Plus fill={colors.backgroundColorContrast} width="100%" height="100%" />
    </CircleIcon>
    <div className="section">
      <ContainerPaddingLeft>
        <p>{this.props.t("advantage1")}</p>
        <p>{this.props.t("advantage2")}</p>
        <p>{this.props.t("advantage3")}</p>
      </ContainerPaddingLeft>
    </div>
  </div>
);

export default withTranslation()(Advantages);
