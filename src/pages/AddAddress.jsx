import React from "react";
import { assets } from "../assets/assets";

export const inputField = ({
  type,
  placeholder,
  name,
  handlechange,
  address,
}) => {
  <input
    className="w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none text-gray-500 focus:border-primary transition"
    onChange={handlechange}
    value={address[name]}
    name={name}
    type={type}
    placeholder={placeholder}
  />;
};

const AddAddress = () => {
  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="mt-16 pb-16">
      <p className="text-2xl md:text-3xl text-gray-500">
        Add Shipping <span className="font-medium text-primary">Address</span>
      </p>
      <div className="flex flex-col-reverse md:flex-row justify-between mt-10">
        <div className="flex-1 max-w-md">
          <form onSubmit={onSubmitHandler}>
            <div>
              <inputField
                handlechange={handlechange}
                address={address}
                name="firstName"
                type="text"
                placeholder="First Name"
              />
              <inputField
                handlechange={handlechange}
                address={address}
                name="lastName"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </form>
        </div>
        <img
          src={assets.add_address_iamge}
          alt=""
          className="md:mr-16 mb-16 md:mt-0"
        />
      </div>
    </div>
  );
};

export default AddAddress;
