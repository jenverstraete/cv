import { colors } from "../../properties";
import CircleIcon from "../icons/CircleIcon";
import ContainerPaddingLeft from "../UI/ContainerPaddingLeft";
import Home from "../icons/Home";
import Text from "../UI/Text";
import { useTranslation } from 'react-i18next';

export default function Address() {
  const { t } = useTranslation();

  return <div className="col-12 paddingTopS marginBottomS">
    <CircleIcon backgroundColor={colors.white}>
      <Home fill={colors.backgroundColorContrast} width="100%" height="100%" />
    </CircleIcon>
    <ContainerPaddingLeft>
      <Text textColor="white">
        {t('addressLine1')}
        <br />
        {t('addressLine2')}
      </Text>
    </ContainerPaddingLeft>
  </div>
}