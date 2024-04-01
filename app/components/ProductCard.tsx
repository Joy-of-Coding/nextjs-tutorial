import React from 'react';
import AddToCart from './AddToCart';

//  #1  this is using a css module 
// import styles from './ProcuctCard.module.css';


const ProductCard = () => {
  return (
    // # 1 css module
    // <div className={styles.card}>

    // styling with tailwind
    //<div className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-600'>
    
    <div>
        <AddToCart />
    </div>
  )
}

export default ProductCard