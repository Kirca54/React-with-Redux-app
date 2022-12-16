import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodToCustomer, removeCustomer } from "../features/customerSlice";
import {removeReservation} from "../features/reservationSlice";

interface CustomerCardType {
    id: string;
    name: string;
    food: string[];
    index: number;
}

function CustomerCard({ id, name, food, index }: CustomerCardType) {
    const [customerFoodInput, setCustomerFoodInput] = useState("");
    const dispatch = useDispatch();
    return (
        <div className="customer-food-card-container">
            <h5>{name}</h5>
            <div className="customer-foods-container">
                <div className="customer-food">
                    {food.map((food) => {
                        return <p>{food}</p>;
                    })}
                </div>
                <div className="customer-food-input-container">
                    <input
                        value={customerFoodInput}
                        onChange={(e) => setCustomerFoodInput(e.target.value)}
                    />
                    <button
                        onClick={() => {
                            dispatch(
                                addFoodToCustomer({
                                    id,
                                    food: customerFoodInput,
                                })
                            );
                            setCustomerFoodInput("");
                        }}>
                        Add
                    </button>
                    <button
                        onClick={() => {
                            dispatch(removeCustomer(index));
                        }}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CustomerCard;