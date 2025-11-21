import React from "react";

const ShippingInfoForm = () => {
  return (
    <div className="flex flex-col gap-y-4 tracking-wide">
      <div className="w-full bg-gray-100 px-3 md:px-6 py-3">
        <h1 className="text-xl font-medium">Shipping</h1>
        <p className="text-sm font-light text-gray-600">Where to ship it?</p>
      </div>
      <div className="w-full px-0 md:px-6">
        <h1 className="text-xl font-semibold py-2 border-b w-auto">
          Customer Information
        </h1>
      </div>
      <div className="w-full flex flex-col gap-4 px-0 md:px-6">
        <div className="w-full">
          <input
            type="text"
            className="w-full px-4 py-3 text-base font-light outline-orange-600 rounded-none border"
            placeholder="Username or Email Address"
          />
        </div>
      </div>
      <div className="w-full px-0 md:px-6">
        <h1 className="text-xl font-semibold py-2 border-b w-auto">
          Billing Details
        </h1>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 px-0 md:px-6">
        <div className="w-full">
          <input
            type="text"
            className="w-full px-4 py-3 text-base font-light outline-orange-600 rounded-none border"
            placeholder="First Name"
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            className="w-full px-4 py-3 text-base font-light outline-orange-600 rounded-none border"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div className="w-full px-0 md:px-6">
        <input
          type="text"
          className="w-full px-4 py-3 text-base font-light outline-orange-600 rounded-none border"
          placeholder="Country / Region"
        />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 px-0 md:px-6">
        <div className="w-full">
          <input
            type="text"
            className="w-full px-4 py-3 text-base font-light outline-orange-600 rounded-none border"
            placeholder="Street Address"
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            className="w-full px-4 py-3 text-base font-light outline-orange-600 rounded-none border"
            placeholder="Aprtment, suite, unite etc."
          />
        </div>
      </div>
      <div className="w-full px-0 md:px-6">
        <input
          type="text"
          className="w-full px-4 py-3 text-base font-light outline-orange-600 rounded-none border"
          placeholder="Phone Number"
        />
      </div>
      <div className="w-full px-0 md:px-6">
        <h1 className="text-xl font-semibold py-2 border-b w-auto">
          Additional Information
        </h1>
      </div>
      <div className="w-full flex flex-col gap-4 px-0 md:px-6">
        <div className="w-full">
          <textarea
            name="additional-information"
            id="additional-information"
            className="w-full px-4 py-3 text-base font-light outline-orange-600 rounded-none border resize-none"
            placeholder="Notes about your order, e.g. special notes for delivery."
          ></textarea>
        </div>
      </div>
      {/* <div className="w-full px-0 md:px-6">
        <button className="w-full text-white bg-orange-600 py-3">
          Proceed To Payment
        </button>
      </div> */}
    </div>
  );
};

export default ShippingInfoForm;
