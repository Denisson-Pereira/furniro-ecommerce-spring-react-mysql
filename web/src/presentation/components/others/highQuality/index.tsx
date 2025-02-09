import High from '../../../../assets/icons/high.png'
import Warranty from '../../../../assets/icons/warranty.png'
import Free from '../../../../assets/icons/free.png'
import Image from '../../../../assets/icons/24.png'

import './highQuality.styles.sass'
import { useTranslation } from 'react-i18next'

export const HighQuality = () => {
    const { t } = useTranslation();

    return (
        <div className="highQuality_container">
            <div className="highQuality_box">
                <img 
                    src={High} 
                    alt="high" 
                    title={t('highQuality.high')}
                />
                <div className="highQuality_box_txt">
                    <p>{t('highQuality.high')}</p>
                    <span>{t('highQuality.crafted')}</span>
                </div>
            </div>
            <div className="highQuality_box">
                <img 
                    src={Warranty} 
                    alt="warranty" 
                    title={t('highQuality.warranty')}
                />
                <div className="highQuality_box_txt">
                    <p>{t('highQuality.warranty')}</p>
                    <span>{t('highQuality.over')}</span>
                </div>
            </div>
            <div className="highQuality_box">
                <img 
                    src={Free} 
                    alt="free" 
                    title={t('highQuality.free')}
                />
                <div className="highQuality_box_txt">
                    <p>{t('highQuality.free')}</p>
                    <span>{t('highQuality.order')}</span>
                </div>
            </div>
            <div className="highQuality_box">
                <img 
                    src={Image} 
                    alt="24/7" 
                    title={t('highQuality.24')}
                />
                <div className="highQuality_box_txt">
                    <p>{t('highQuality.24')}</p>
                    <span>{t('highQuality.delicated')}</span>
                </div>
            </div>
        </div>
    )
}
