import '../assets/css/card.css'

const Card=({data})=>{
    return(
        <div>
        <img src={require(`../assets/img/${data.img}`)}/>
        <h2 className='card_title'>{data?.title}</h2>
        <img src={require('../assets/img/star.png')}></img>
        <p>{data?.price}</p>
        </div>
    )
}

export default Card