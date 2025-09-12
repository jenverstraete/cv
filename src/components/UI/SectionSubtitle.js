import TitleS from "./TitleS";
import { colors } from "../../properties";

const SectionSubtitle = props => (
  <div className="row">
    <div>
      <TitleS textColor={colors.textColorContrast}>{props.text}</TitleS>
    </div>
  </div>
);

export default SectionSubtitle;
