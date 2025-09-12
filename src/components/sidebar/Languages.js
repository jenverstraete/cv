import Text from "../UI/Text";
import { useTranslation } from 'react-i18next';

export default function Languages() {
  const { t } = useTranslation();

  return <div className="col-12 paddingTopS">
    <Text centered={true} textColor="white">
      {t('languages')}
    </Text>
  </div>
}