import { useTranslation } from 'react-i18next'
import Room from '../../../../../../assets//images/room.png'
import Home from '../../../../../../assets/images/home.png'
import { ButtonCustom } from '../../../../../components'

import './Beautiful.styles.sass'

export const Beautiful = () => {
  const { t } = useTranslation();
  return (
    <div className="beautiful_container">
        <div className="beautiful_box1">
            <p>{t("home.title3")}</p>
            <span>{t("home.subTitle4")}</span>
            <ButtonCustom 
              text='Explore More' 
              sizeText={18} 
              type='button'
            />
        </div>
        <div className="beautiful_box2">
            <img src={Room} />
        </div>
        <div className="beautiful_box3">
            <img src={Home} />
        </div>
    </div>
  )
}
