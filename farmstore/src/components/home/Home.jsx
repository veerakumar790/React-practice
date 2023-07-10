import React from "react";
import Itemcart from "../itemcart/Itemcart";
import data from "../data/Data";
import data2 from "../data/Data2";
const Home = () => {
  return (
    <div>
      <h1 className="text-center mt-3">Farm vegetables</h1>
      <marquee>Fresh Vegetables! Direct from Farm...</marquee>
      <section className="py-4 container">
        <div className="row justify-content-center" >
          {data.productData.map((item, index) => {
            return (
              <Itemcart
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
                key={index}
              />
            );
          })}
        </div>
        <div className="row justify-content-center ">
       {data2.productData2.map((item, index)=>{
         return (
            <Itemcart
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
              item={item}
              key={index}
            />
          );
       }
       
     )}
        </div>
      </section>
    </div>
  );
};

export default Home;
