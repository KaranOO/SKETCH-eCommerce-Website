import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  console.log(item);
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img 
            src={
              process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url
            }
            alt=""
            className="mainImg"
          />
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL + item.attributes?.img2?.data?.attributes?.url
            }
            alt=""
            className="secondImg"
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>Rs. {item.oldPrice || item?.attributes.price + 320}</h3>
          <h3>Rs. {item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;


// const Card = ({item} ) => {
//   console.log(item);
//   return (
//     <Link className="link" to={`/product/${item.id}`}>
//       <div className="card">
//         <div className="image">
//             {item?.attributes.isNew && <span>New Arrival</span>}
//             <img src={process.env.REACT_APP_UPLOAD_URL + item.attributes.img.data.attributes.url} alt="" className="mainImg" />
//             <img src={process.env.REACT_APP_UPLOAD_URL + item.attributes.img2.data.attributes.url} alt="" className="secondImg" />
//         </div>
//         <h2>{item?.attributes.title}</h2>
//         <div className="prices">
//           <h3>Rs. {item.oldPrice || item?.attributes.price + 327}</h3>
//           <h3>{item?.attributes.price}</h3>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default Card;