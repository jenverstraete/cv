import { colors } from "../../properties";
import CircleIcon from "../icons/CircleIcon";
import ContainerPaddingLeft from "../UI/ContainerPaddingLeft";
import PhoneIcon from "../icons/Phone";
import Text from "../UI/Text";
import { useTranslation } from 'react-i18next';

export default function Phone() {
  const { t } = useTranslation();

  return <div className="col-12 paddingTopS">
    <CircleIcon backgroundColor={colors.white}>
      <PhoneIcon fill={colors.backgroundColorContrast} width="100%" height="100%" />
    </CircleIcon>
    <ContainerPaddingLeft>
      <Text textColor="white">
        {t('phone')}
      </Text>
    </ContainerPaddingLeft>
  </div>
}