import { render } from '@testing-library/react';
import React from 'react';
import './Item.css';
class Item extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id:props.id,
            title:props.title,
            image:props.image,
            rating: props.rating,
            stars:[]
        };
    }
    onChangeRatimg = (e) => {
        const rating = parseInt(e.target.value);
        this.setState({rating:rating,stars:Array(rating).fill(0)});
        this.props.onupdaterating({id:this.state.id,title:this.state.title,image:this.state.image,rating:this.state.rating});
    }
    componentDidMount(){
        console.log(this.props);
        this.setState({
            stars: Array(parseInt(this.props.rating)).fill(0)
        });
    }
    onDelete = () => {
        console.log(this.state.id);
        this.props.ondelete({id:this.state.id});
    }
    render(){
        return(
            <div className="item">
                <div className="image">
                    <img src={'img/' + this.props.image} width='100%'/>
                </div>
                <div className="title">{this.props.title}</div>
                <div className="rating">
                    <p>
                    {
                        this.state.stars.map(x => 
                            <img src="img/star.png" width="32" />
                        )
                    }
                    </p>
                    Clasificaci&oacute;n:
                    <select value={this.state.rating} onChange={this.onChangeRatimg}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="actions">
                    <button onClick={this.onDelete} >Eliminar</button>
                </div>
            </div>
        );
    }
}
export default Item;