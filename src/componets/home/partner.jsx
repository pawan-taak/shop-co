import React from 'react'
import '../../assets/css/partner.css'


const Partner = () => {
  let partners = [
    {
      img: 'versace.png',
    },
    {
      img: 'zara-logo.png',
    },
    {
      img: 'gucci-logo.png',
    },
    {
      img: 'prada-logo.png',
    },
    {
      img: 'calvin.png',
    },
  ];



  return (
    <div className='company_back_section'>
      <div className='section'>
        <div className='company_name_section'>
          {
            partners.map((item, index) => {
              return (
                <img src={require(`../../assets/img/${item?.img}`)} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Partner
