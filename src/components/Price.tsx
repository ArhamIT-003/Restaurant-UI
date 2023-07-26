import React, { useState, useEffect } from "react";

type Props = {
  id: number;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};
const Price = ({ price, options, id }: Props) => {
  const [selected, setSelected] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(price);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [selected, options, quantity, price]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
      {/* OPTION CONTAINER */}
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className=" min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md"
            style={{
              background: selected === index ? "rgba(248, 113, 113) " : "white",
              color: selected === index ? "white" : "red",
            }}
            onClick={() => {
              setSelected(index);
            }}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* qauntity and Add button CONTAINER */}
      <div className="flex justify-between items-center">
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500 rounded-md">
          {/* QUANTITY */}
          <span className="">Quantity</span>
          <div className="flex gap-2 items-center">
            <button
              onClick={() => {
                setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
              }}
            >{`<`}</button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >{`>`}</button>
          </div>
        </div>

        <button className="text-white w-56 bg-red-500 uppercase rounded-md p-3 ring-red-500 ring-1">
          {" "}
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Price;
