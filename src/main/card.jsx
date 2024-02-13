import '../assets/css/card.css'


const Card=({data})=>{
    return(
        <div className="card">
        {
            data?.img !==undefined &&
        <img src={require(`../assets/images/${data?.img}`)}/>
        }
        <p className="card_name">{data?.name}</p>
        <p className="info">${data?.info}</p>
        
        </div>
    )
}

export default Card