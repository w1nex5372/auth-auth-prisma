import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface MyFontAwesomeIconProps {
  icon: IconProp;
  className? : string
}

const MyFontAwesomeIcon: React.FC<MyFontAwesomeIconProps> = ({ icon, className }) => {
  return <FontAwesomeIcon icon={icon} className={className}/>;
};

export default MyFontAwesomeIcon;
