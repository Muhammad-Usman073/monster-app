import React from "react";
import "./card.styles.css";
const CardComponent = (props) => {
  const { value } = props;
  return (
    <div className="card-container" key={value.id}>
      <img
        alt={`monster ${value.name}`}
        src={`https://robohash.org/${value.id}?set=set2&size=100x100`}
      />
      <h2>{value.name}</h2>
      <p>{value.email}</p>
    </div>
  );
};
//  class CardComponent extends Component{
//     render(){
//         const {value} = this.props
//         return(
//             <div className="card-container" key={value.id}>
//               <img
//                 alt={`monster ${value.name}`}
//                 src={`https://robohash.org/${value.id}?set=set2&size=100x100`}
//               />
//               <h2>{value.name}</h2>
//               <p>{value.email}</p>
//             </div>
//         )
//     }
//  }
export default CardComponent;
