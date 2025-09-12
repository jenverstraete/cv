import TitleS from "../UI/TitleS";
import Text from "../UI/Text";
import { useTranslation } from 'react-i18next';

export default function AboutMe() {
  const { t } = useTranslation();

  return <div className="col-12 paddingTopM marginTopL">
    <TitleS textColor="white">
      {t('generalTitle')}
    </TitleS>
    <Text textColor="white">
      {t('generalInfo')}
    </Text>
  </div>
}