import '../assets/css/card.css'

const Card=({data})=>{
    return(
        <div className="card">
        {
            data?.img !==undefined &&
            <img src={require('../../assets/icon/Star 2.png')}></img>
        }
        <p className="card_name">{data?.title}</p>
        <p className="info">${data?.stars}</p>
        
        </div>
    )
}

export default Card