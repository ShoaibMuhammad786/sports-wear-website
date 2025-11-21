import React from "react";
import { styles } from "../../styles/styles";
import { IoIosClose } from "react-icons/io";
import { Backpack } from "../../assets/export";
import CartProduct from "./CartProduct";
import Button from "../Global/Button";
import { Link } from "react-router-dom";

const CartProducts = () => {
  return (
    <div className={`py-6 lg:py-12 ${styles.paddingHorizontal}`}>
      <div className="bg-white p-4 md:p-10 lg:p-14">
        <h1 className="text-2xl font-semibold">Cart</h1>
        <div className="w-full mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-3 lg:col-span-2 border">
            <div className="w-full hidden lg:grid grid-cols-5 border-b py-4 bg-gray-100">
              <div></div>
              <div className="flex items-center justify-start px-2">
                <h1 className="font-medium">Product</h1>
              </div>
              <div className="flex items-center justify-center">
                <h1 className="font-medium">Price</h1>
              </div>
              <div className="flex items-center justify-center">
                <h1 className="font-medium">Quantity</h1>
              </div>
              <div className="flex items-center justify-center">
                <h1 className="font-medium">Subtotal</h1>
              </div>
            </div>
            <CartProduct />
            <CartProduct />
            <CartProduct />
          </div>
          <div className="col-span-3 lg:col-span-1">
            <div className="w-full border">
              <div className="w-full bg-gray-100 py-4 px-3">
                <h1 className="font-medium">Cart totals</h1>
              </div>
              <div className="w-full py-4 px-3 flex items-center justify-between border-b">
                <p className="font-light text-gray-500">Subtotal</p>
                <p className="font-light text-gray-500">$161.30</p>
              </div>
              <div className="w-full py-4 px-3 flex items-center justify-between border-b">
                <p className="font-light text-gray-500">Total</p>
                <p className="font-light text-gray-500">$161.30</p>
              </div>
              <div className="w-full flex items-center justify-center px-3 py-4">
                <Link
                  to="/checkout"
                  className="w-full text-center py-3 text-white font-medium text-base bg-orange-600"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
