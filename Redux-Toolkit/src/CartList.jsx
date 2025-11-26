import { useDispatch, useSelector } from "react-redux";
import { clearAllItems, removeItem } from "./redux/slice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CartList() {

    const cartSelector = useSelector((state) => state.cart.items);
    const [cartItems, setCartItems] = useState(cartSelector);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Update quantity
    const manageQuantity = (id, q) => {
        const quantity = Math.max(1, Number(q));

        const updatedCart = cartItems.map(item =>
            item.id === id ? { ...item, quantity } : item
        );

        setCartItems(updatedCart);
    };

    // Place order
    const handlePlaceOrder = () => {
        localStorage.clear();
        dispatch(clearAllItems());
        alert("Order placed");
        navigate("/");
    };

    // Total price
    const total = cartItems.reduce(
        (sum, item) =>
            sum + item.price * (item.quantity || 1),
        0
    );

    return (
        <div className="cart-container">
            <div className="cart-header">
                <h2>Your Cart Items</h2>
                <span>{cartItems.length} items</span>
            </div>

            {cartItems.length > 0 &&
                cartItems.map((item) => (
                    <div key={item.id} className="cart-item">

                        {/* Item Info */}
                        <div className="item-info">
                            <img src={item.thumbnail} alt="" />
                            <div className="item-details">
                                <h4>{item.title}</h4>
                                <p>{item.brand}</p>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="item-actions">
                            <input
                                type="number"
                                min="1"
                                value={item.quantity || 1}
                                onChange={(e) =>
                                    manageQuantity(item.id, e.target.value)
                                }
                                style={{ margin: "15px" }}
                            />

                            <div>
                                <span className="price">
                                    ${(item.price * (item.quantity || 1)).toFixed(2)}
                                </span>

                                <button
                                    onClick={() => dispatch(removeItem(item))}
                                    className="btn"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }

            <div className="cart-footer">
                Total : ${total.toFixed(2)}
            </div>

            <button onClick={handlePlaceOrder} className="btn">
                Place Order
            </button>
        </div>
    );
}
