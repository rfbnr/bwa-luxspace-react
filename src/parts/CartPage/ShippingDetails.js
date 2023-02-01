import fetchData from "helpers/fetch/fetchData";
import useAsync from "helpers/hooks/useAsync";
import useForm from "helpers/hooks/useForm";
import { useGlobalContext } from "helpers/hooks/useGlobalContext";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function ShippingDetails() {
  const nav = useNavigate();
  const { state, dispatch } = useGlobalContext();
  const { data, run, isLoading } = useAsync();

  const { form: payload, updateForm } = useForm({
    completeName: "",
    emailAddress: "",
    address: "",
    phoneNumber: "",
    courier: "",
    payment: "",
  });

  useEffect(() => {
    run(fetchData({ url: "/api/checkout/meta" }));
  }, [run]);

  const isSubmitEnabled =
    Object.keys(payload).filter((key) => payload[key] !== "").length ===
    Object.keys(payload).length;

  async function submitHandler(event) {
    event.preventDefault();

    try {
      if (Object.keys(state.cart).length > 0) {
        const res = await fetchData({
          url: "/api/checkout",
          method: "POST",
          body: JSON.stringify({
            ...payload,
            cart: Object.keys(state.cart).map((key) => ({
              id: state.cart[key].id,
              price: state.cart[key].price,
              title: state.cart[key].title,
            })),
          }),
        });

        if (res) {
          dispatch({ type: "RESET_CART" });
          nav("/success-order");
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Sorry, Your cart is empty",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full md:px-4 md:w-4/12" id="shipping-detail">
      <div className="bg-gray-200 px-4 py-6 md:p-8 md:rounded-3xl">
        <form action="/success-order" onSubmit={submitHandler}>
          <div className="flex flex-start mb-6">
            <h3 className="text-2xl">Shipping Details</h3>
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="complete-name" className="text-sm mb-2">
              Complete Name
            </label>
            <input
              onChange={updateForm}
              value={payload.completeName}
              name="completeName"
              className="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
              placeholder="Input your name"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-sm mb-2">
              Email Address
            </label>
            <input
              onChange={updateForm}
              value={payload.emailAddress}
              name="emailAddress"
              className="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
              placeholder="Input your email address"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="address" className="text-sm mb-2">
              Address
            </label>
            <input
              onChange={updateForm}
              value={payload.address}
              name="address"
              className="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
              placeholder="Input your address"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="phone-number" className="text-sm mb-2">
              Phone Number
            </label>
            <input
              onChange={updateForm}
              value={payload.phoneNumber}
              name="phoneNumber"
              className="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
              placeholder="Input your phone number"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="complete-name" className="text-sm mb-2">
              Choose Courier
            </label>
            <div className="flex -mx-2 flex-wrap">
              {isLoading
                ? Array(2)
                    .fill()
                    .map((_, index) => {
                      return (
                        <div key={index} className="px-2 h-24 mb-4 w-6/12">
                          <div className="bg-gray-400 w-full h-full animate-pulse rounded-lg mx-2"></div>
                        </div>
                      );
                    })
                : data?.couriers?.map((item) => {
                    return (
                      <div key={item.id} className="px-2 w-6/12 h-24 mb-4">
                        <button
                          type="button"
                          onClick={() =>
                            updateForm({
                              target: {
                                name: "courier",
                                value: item.name,
                              },
                            })
                          }
                          className="border border-gray-200 focus:border-red-500 flex items-center justify-center rounded-xl bg-white w-full h-full focus:outline-none">
                          <img
                            src={item.imgUrl}
                            alt={item.name}
                            className="object-contain max-h-full"
                          />
                        </button>
                      </div>
                    );
                  })}
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="complete-name" className="text-sm mb-2">
              Choose Payment
            </label>
            <div className="flex -mx-2 flex-wrap">
              {isLoading
                ? Array(4)
                    .fill()
                    .map((_, index) => {
                      return (
                        <div key={index} className="px-2 h-24 mb-4 w-6/12">
                          <div className="bg-gray-400 w-full h-full animate-pulse rounded-lg mx-2"></div>
                        </div>
                      );
                    })
                : data?.payments?.map((item) => {
                    return (
                      <div key={item.id} className="px-2 w-6/12 h-24 mb-4">
                        <button
                          type="button"
                          onClick={() =>
                            updateForm({
                              target: {
                                name: "payment",
                                value: item.name,
                              },
                            })
                          }
                          className="border border-gray-200 focus:border-red-500 flex items-center justify-center rounded-xl bg-white w-full h-full focus:outline-none">
                          <img
                            src={item.imgUrl}
                            alt={item.name}
                            className="object-contain max-h-full"
                          />
                        </button>
                      </div>
                    );
                  })}
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={!isSubmitEnabled}
              className="bg-pink-400 text-black hover:bg-black hover:text-pink-300 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-6">
              Checkout Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
