import React from 'react'
import '../../assets/css/browse.css'

const Browse = () => {
    return (
        <div className="container">
            <div className="section">
                <div className="browse_section">

                    <h2 className="m_primary_heading">BROWSE BY DRESS STYLE</h2>
                    <div className="browse_card_section">
                        <span>
                            <p className="browse_heading m_secondary_heading">Casual</p>
                            <img src={require('../../assets/img/casual_img.png')} alt='#' className="browse_img small_img" />
                        </span>

                        <span>
                            <p className="browse_heading m_secondary_heading">Formal</p>
                            <img src={require('../../assets/img/formal_img.png')} alt='#' className="browse_img big_img" />
                        </span>

                        <span>
                            <p className="browse_heading m_secondary_heading">Party</p>
                            <img src={require('../../assets/img/party_img.png')} alt='#' className="browse_img big_img" />
                        </span>

                        <span>
                            <p className="browse_heading m_secondary_heading">Gym</p>
                            <img src={require('../../assets/img/gym_img.png')} alt='#' className="browse_img small_img" />
                        </span>
                    </div>


                    {/* mob section */}


                    <div className="browse_mob_section">
                        <span>
                            <p className="browse_mob_heading m_secondary_heading">Casual</p>
                            <img src={require('../../assets/img/casual_mb_img.png')} alt="#" className='browse_mob_img' />
                        </span>

                        <span>
                            <p className="browse_mob_heading m_secondary_heading">Formal</p>
                            <img src={require('../../assets/img/formal_mb_img.png')} alt='#' className="browse_mob_img" />
                        </span>

                        <span>
                            <p className="browse_mob_heading m_secondary_heading">Party</p>
                            <img src={require('../../assets/img/party_mb_img.png')} alt='#' className="browse_mob_img" />
                        </span>

                        <span>
                            <p className="browse_mob_heading m_secondary_heading">Gym</p>
                            <img src={require('../../assets/img/gym_mb_img.png')} alt='#' className="browse_mob_img" />
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Browse
