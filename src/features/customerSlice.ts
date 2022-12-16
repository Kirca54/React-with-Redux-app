import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Customer {
    id: string;
    name: string;
    food: string[];
    index: number
}

interface AddFoodToCustomerPayload {
    food: string;
    id: string;
}

export interface CustomerState {
    value: Customer[];
}

const initialState: CustomerState = {
    value: [],
};

export const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<Customer>) => {
            state.value.push(action.payload);
        },
        addFoodToCustomer: (
            state,
            action: PayloadAction<AddFoodToCustomerPayload>
        ) => {
            state.value.forEach((customer) => {
                if (customer.id === action.payload.id) {
                    customer.food.push(action.payload.food);
                }
            });
        },
        removeCustomer: (state, action: PayloadAction<number>) => {
            state.value.splice(action.payload, 1);
        },
    },
});

export const {addCustomer, addFoodToCustomer, removeCustomer} = customerSlice.actions;

export default customerSlice.reducer;