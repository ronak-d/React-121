function RestaurantDetails({
    image: url,
    title,
    cost,
    rating,
    votes,
    reviews,
    cuisine: tags
}){

    return(
        <div style = {{display:"flex", margin:"1.5rem",gap:"2rem", padding:"10px", border: "1px solid black"}}>
            <div>
                <img width ="60px" src={url} alt={title} />
            </div>

            <div>
                <div>{title}</div>
                <div>{tags}</div>
                <div>Cost ${cost} for one</div>
            </div>

            <div>
                <div>{rating}</div>
                <div>{votes}</div>
                <div>{reviews}</div>
            </div>
        </div>
    )
}

export default RestaurantDetails


// 19 mins