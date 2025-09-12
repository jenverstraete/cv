import TitleM from "../UI/TitleM";
import { useTranslation } from 'react-i18next';

export default function Name() {
  const { t } = useTranslation();

  return <div className="col-12 paddingTopS">
    <TitleM textColor="white">
      {t('name')}
    </TitleM>
  </div>
}