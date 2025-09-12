import { colors } from "../../properties";
import TitleL from "../UI/TitleL";
import { useTranslation } from 'react-i18next';

export default function Function() {
  const { t } = useTranslation();

  return <div className="row">
    <div className="col-12">
      <TitleL textColor={colors.textColorContrast}>{t('function')}</TitleL>
    </div>
  </div>
}