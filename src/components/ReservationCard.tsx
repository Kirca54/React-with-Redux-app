import React from "react";
import {useDispatch} from "react-redux";
import { removeReservation } from "../features/reservationSlice";

interface ReservationCardType {
    name: string;
    index: number;
}


export default function ReservationCard({ name, index }: ReservationCardType) {

    const dispatch = useDispatch();

    return(
        <div
            className="reservation-card-container"
            onClick={() => {
                dispatch(removeReservation(index));}}
        >
            {name}
        </div>
    )

}