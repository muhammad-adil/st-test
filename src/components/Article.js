import React, { useEffect, useState } from 'react'
import './Article.css';
import Card from './Card';
//1st way
// import tshirtData from "../data/tshirt.json";
function Article() {
  // const [data, setData] = useState(tshirtData)
  // const [tshirts, setTshirts] = useState(tshirtData);


  // useEffect(() => {
  //   // async function get() {
  //   //   try {
  //   //     const res = await fetch(`../data/tshirt.json`);
  //   //     const json = await res.json();
  //   //     console.log('Tshirt json from article componenet', json)
  //   //   } catch (err) {
  //   //     console.error('err', err);
  //   //   }
  //   // }
  //   fetch(`../data/tshirt.json`, {
  //     headers : {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     }
  //   })
  //   // https://muhammad-adil.com/work/st/tshirt.json
  //     .then((response) => response.json())
  //     .then((result) => {
  //       // console.log(JSON.stringify(result));
  //       console.log(result, "Result");
  //       setData(result)
  //     })
  // }, [])
  // if (data) {
    // render() {
    return(
      <Card/>
    );
  }
// }
export default Article;