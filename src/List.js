import React from 'react';
import Item from './Item';

function List(props){
    return(
        <div className="list">
            {
                props.items.map(item => 
                    <Item 
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        rating={item.rating}
                        title={item.title}
                        onupdaterating= {props.onupdaterating}
                        ondelete = {props.ondelete}
                    />
                )
            }

        </div>
    );
}

export default List;