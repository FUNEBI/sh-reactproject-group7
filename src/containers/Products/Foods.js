import React from 'react';
import Product from './Product';

class Foods extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            foodList:[],
         }
    }

    componentDidMount(){
        fetch(process.env.REACT_APP_FOODS_URL)
        .then(res=>res.json())
        .then(data=>this.setState({foodList:data.meals}))
        .catch(err=>console.log(":::::" + err + " :::::"))
    }

    render(){
        return(
            <div className='product-wrapper'>
            
                {
                    this.state.foodList.map(el=>{
                        return < Product items={el} key={el.idMeal} />
                    })
                }

            </div>
             
        )         
    }
}

export default Foods;