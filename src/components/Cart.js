import React from "react";
import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();
  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.quantity;
  };
  const total = cart.reduce(addition, 0);
  return (
    <div className="cartcontainer">
      <Link to="/">
        <TiArrowBack />
      </Link>
      <div className="cart">
        {cart.map((item) => {
          return (
            <div className="cartcad" key={item.id}>
              <div>
                <img src={`../images/${item.image}`} alt={item.name} />
                <h4>{item.name}</h4>
                <p>Price: Ksh. {item.price}</p>
                <p>amount: Ksh.{item.price * item.quantity}</p>
                <button
                  onClick={() =>
                    dispatch({
                      type: "REMOVE",
                      payload: item,
                    })
                  }
                >
                  remove
                </button>
              </div>
              <div>
                <button
                  onClick={() =>
                    dispatch({
                      type: "INCREASE",
                      payload: item,
                    })
                  }
                >
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  onClick={() => {
                    if (item.quantity > 1) {
                      dispatch({
                        type: "DECREASE",
                        payload: item,
                      });
                    } else {
                      dispatch({
                        type: "REMOVE",
                        payload: item,
                      });
                    }
                  }}
                >
                  -
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {total > 0 && <h2>total:{total}</h2>}
    </div>
  );
};

export default Cart;
