import React from 'react'
import './Newcollection.css';
import new_collection from '../Assets/new_collections';
import Item from '../Item/Item';
const Newcollection = () => {
  return (
    <div className='new-collection'>
    <h2 id='new-collection'>NEW COLLECTION</h2>
    <hr/>
    <div className='collection' >
       {
        new_collection.map((item,i)=>{
            return(
                <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
            )
        })
       }
        
    </div>
      
    </div>
  )
}

export default Newcollection
