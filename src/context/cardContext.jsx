import axios from 'axios';
import React from 'react'
import { createContext } from 'react';




export const CardContext = createContext();

export default function CardContextProvider(props) {


    function addToCard(productId) {
        return axios.post("https://ecommerce.routemisr.com/api/v1/cart",
            {
                productId,
            },
            {
                headers: { token: localStorage.getItem("userToken") }
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function removeProduct(productId) {
        return axios.delete(
            `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
            {
                headers: { token: localStorage.getItem("userToken") }
            }
        )
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }


    function getLoggedCard() {

        return axios.get("https://ecommerce.routemisr.com/api/v1/cart",
            {                 headers: { token: localStorage.getItem("userToken") }
        })
            .then(response => { return response?.data?.data?.products })
            .catch(error => { console.log(error); })
  }


    return (
        <CardContext.Provider value={{ getLoggedCard, addToCard, removeProduct }}>
            {props.children}
        </CardContext.Provider>
    )

}