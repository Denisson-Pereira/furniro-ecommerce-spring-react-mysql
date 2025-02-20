import { Link, useParams } from 'react-router-dom'
import Logo from '../../../../../../Assets/Images/logo.png'

import './HeaderCategory,styles.sass'

export const HeaderCategory = () => {
    const { category } = useParams();

    return (
        <div className="headerCategory_container">
            <img src={Logo} alt="logo" />
            <p>{category} Category</p>
            <div className="headerCategory_links">
                <Link className='headerCategory_a' to={'/'}>Home</Link>
                <p>&gt;</p>
                <p>{category}</p>
            </div>
        </div>
    )
}
