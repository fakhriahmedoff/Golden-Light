import React from 'react'
import {Link} from 'react-router-dom'

import prdimg1 from '../../images/icon/document.svg'
import prdimg2 from '../../images/icon/bar-graph.svg'
import prdimg3 from '../../images/icon/clipboard.svg'


const Features = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }


     const featres = [
         {
            fIcon:prdimg1,
            title:'Strategy and Planning',
            des:'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy.',      
            link:'/service-single',
         },
         {
            fIcon:prdimg2,
            title:'Market Analysis',
            des:'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy.',      
            link:'/service-single',
         },
         {
            fIcon:prdimg3,
            title:'Investment Strategy',
            des:'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy.',      
            link:'/service-single',
         },
         
     ]


    return(
        <section className={`wpo-features-section section-padding  ${props.featuresClass}`}>
            <div className="container">
                <div className="row">
                    {featres.map((featres, fitem) => (
                        <div className="col-lg-4 col-md-6 col-12" key={fitem}>
                            <div className="wpo-features-item">
                                <div className="wpo-features-icon">
                                    <div className="icon">
                                        <img src={featres.fIcon} alt=""/>
                                    </div>
                                </div>
                                <div className="wpo-features-text">
                                    <h2><Link onClick={ClickHandler} to={featres.link}>{featres.title}</Link></h2>
                                    <p>{featres.des}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features;