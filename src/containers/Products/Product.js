const Product = (props)=>{
    return(
        <div className="product">
            <img src={props.items.strMealThumb} alt='product infor'/>
            <p>
                <span>
                    {props.items.strMeal}
                </span>
                &nbsp; <br/>
                $ {props.items.idMeal}
            </p>
        </div>
    )
}

export default Product;