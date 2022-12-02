import React from "react";
import products from "../../../products/products.json";
import { useMutation } from "react-query";
import { api } from "../../../utils/client";

function Promotion({ setDisplayConfig }) {
  const { mutate, isLoading, isSuccess, isError, data, error, reset } =
    useMutation(
      async (data) =>
        api.post("/sportclassifier/predict", data, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              "access_token"
            )}`,
          },
        }),
      {
        onSuccess: (data) => {
          // YOU have error from your side due to cors policy
          //
          //
          console.log(data);
        },

        onError: (dataError) => {
          //You're not allowed to access this resource
          console.log(dataError);
        },
      }
    );

  const showProdInfo = (imgUrl) => {
    let access_token = window.localStorage.getItem("access_token");
    if (!access_token) {
      setDisplayConfig({
        modal: true,
        title: "Error",
        msg: "You must login first",
        type: "error",
      });
    } else {
      const params = new URLSearchParams();

      params.append("file", imgUrl);

      // GET ERROR You're not allowed to access this resource
      mutate({ file: imgUrl });
    }
  };

  return (
    <>
      <section className="text-white body-font">
        <div className="pt-24 text-center ">
          <h1 className="md:text-[60px] text-[40px] font-bold">
            DECATHLON PRODUCTS
          </h1>
          <p className="font-serif text-gray text-[14px] md:text-[20px]">
            clickez sur l'image pour avoir l'image sports prédits avec des
            probabilités.
          </p>
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products &&
              products.map((pr, index) => (
                <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a
                    href={void 0}
                    onClick={() => showProdInfo(pr.img)}
                    className="block relative h-48 rounded overflow-hidden cursor-pointer"
                  >
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={pr.img}
                    />
                  </a>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Promotion;
