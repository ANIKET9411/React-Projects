import { useEffect, useReducer, useState } from "react";
import "./Main.css";
import { products } from "../../Productlist/Productlist";
function Main() {
  const [cartItem, setCartItem] = useState([]);
  // const [proditem, setProdItem] = useState([]);
  function reducerfn(state, action) {
    switch (action.type) {
      case "add_to_cart":
        return;
      case "incresedQuantity": {
        let updatedproduct = state.prodlist.map((product) => {
          if (product.id === action.payload) {
            product.Q = product.Q + 1;
          }
          return product;
        });
        console.log(updatedproduct);
        return {
          ...state,
          prodlist: updatedproduct,
        };
      }
      case "decresedQuantity": {
        let updatedproduct = state.prodlist.map((product) => {
          if (product.id === action.payload && product.Q > 0) {
            product.Q = product.Q - 1;
          }
          return product;
        });
        console.log(updatedproduct);
        return {
          ...state,
          prodlist: updatedproduct,
        };
      }
      case "total_sum": {
        let total = action.payload.reduce((acc, cv) => {
          return acc + cv.Q * cv.price;
        }, 0);
        return {
          ...state,
          sum: total,
        };
      }
    }
  }
  const [state, dispatch] = useReducer(reducerfn, {
    prodlist: products,
    sum: 0,
  });
  useEffect(() => {
    let cartlist = state.prodlist.filter((product) => {
      return product.Q > 0;
    });

    findtotal();
    setCartItem(cartlist);
  }, [state.prodlist, findtotal]);
  function findtotal() {
    dispatch({ type: "total_sum", payload: cartItem });
  }
  return (
    <div className="main">
      <div className="produts">
        <h1>PRODUCTS</h1>
        {state.prodlist.map((product) => {
          return (
            <div className="product" key={product.id}>
              <p className="Pname">{product.name}</p>
              <p className="Pprice">{product.price}</p>
              <button
                onClick={() => {
                  dispatch({ type: "incresedQuantity", payload: product.id });
                }}
              >
                +
              </button>
              <p>{product.Q}</p>
              <button
                onClick={() => {
                  dispatch({ type: "decresedQuantity", payload: product.id });
                }}
              >
                -
              </button>
            </div>
          );
        })}
      </div>
      <div className="carts">
        <h1>CARTS</h1>
        {cartItem.length === 0 && <p>Nothing is in cart</p>}
        {cartItem.map((item) => {
          return (
            <div className="cart" key={item.id}>
              <p>{item.name}</p>
              <b>
                {item.Q}*{item.price}
              </b>
            </div>
          );
        })}
        {state.sum > 0 && <h2>TOTAL:{state.sum}</h2>}
      </div>
    </div>
  );
}
export default Main;
