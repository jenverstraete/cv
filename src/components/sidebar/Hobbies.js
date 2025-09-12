import TitleS from "../UI/TitleS";
import Text from "../UI/Text";
import { useTranslation } from 'react-i18next';
import { colors } from "../../properties";

export default function Hobbies() {
  const { t } = useTranslation();

  return <div className="col-12 paddingTopM marginTopL">
    <TitleS textColor="white">
      {t('hobbyTitle')}
    </TitleS>
    <Text textColor={colors.white}>
      {t("hobby1")}
      <a href="https://www.eternalbreath.be" target="_blank" rel="noreferrer">www.eternalbreath.be</a>
    </Text>
    <Text marginTop textColor={colors.white}>
      {t("hobby2")}
    </Text>
    <Text marginTop textColor={colors.white}>
      {t("hobby3")}
    </Text>
  </div>
}
