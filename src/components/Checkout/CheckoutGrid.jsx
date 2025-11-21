import React from "react";
import { styles } from "../../styles/styles";
import ShippingInfoForm from "./ShippingInfoForm";
import PaymentForm from "./PaymentForm";

const CheckoutGrid = () => {
  return (
    <div className={`py-6 lg:py-12 ${styles.paddingHorizontal} flex flex-col`}>
      <div className="w-full bg-white p-4 md:p-10 lg:p-16 lg:pb-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ShippingInfoForm />
        <PaymentForm />
      </div>
      <div className="w-full bg-white px-4 lg:px-20 pb-12">
        <button
          disabled
          className="w-full py-3 text-white font-medium text-base bg-orange-600 disabled:cursor-not-allowed"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutGrid;
