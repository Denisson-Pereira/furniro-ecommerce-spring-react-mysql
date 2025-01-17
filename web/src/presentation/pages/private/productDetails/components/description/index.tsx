import Sofa from '../../../../../../assets/images/sofa.png'

import './description.styles.sass'

export const Description = () => {
  return (
    <div className="descriptionComponent_container">
        <div className="descriptionComponent_txt">
            <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
            <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
        </div>
        <div className="descriptionComponent_imgs">
            <img
                src={Sofa} 
                alt="sofa" 
                title='sofa'
            />
            <img
                src={Sofa} 
                alt="sofa" 
                title='sofa'
            />
        </div>
    </div>
  )
}
