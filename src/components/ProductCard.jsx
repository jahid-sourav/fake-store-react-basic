export default function ProductCard({ product }) {
  const { id, title, price, description, category, image, rating } = product;
  return (
    <>
      <div className="p-2 rounded shadow border-2 border-black/[.3] relative">
        <div className="bg-black p-2 text-white rounded inline-block absolute top-[-18px] left-[-2px]">
          <p>{category ? category : "No Data Found"}</p>
        </div>
        <img
          src={
            image
              ? image
              : "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          }
          className="h-[250px] w-[100%] object-cover mx-auto mb-5"
          alt="Product Image"
        />
        <p
          className="font-bold text-xl text-black/[.7] mb-3"
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title ? title : "No Data Found"}
        </p>
        <p className="font-medium text-base text-green-700/[.9] mb-3">
          ${price ? price : "No Data Found"}
        </p>
        <p
          className="font-medium text-base text-black/[.6] mb-3 capitalize"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2, // Number of lines to show
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description ? description : "No Data Found"}
        </p>
        <div className="flex gap-2 items-center">
          <div className="flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="green"
              className="bi bi-star"
              viewBox="0 0 16 16"
            >
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
            </svg>
            <p className="text-base text-green-700">
              {rating?.rate ? rating.rate : "No Data Found"}
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="green"
              className="bi bi-chat-dots"
              viewBox="0 0 16 16"
            >
              <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
              <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2" />
            </svg>
            <p className="text-base text-green-700">
              {rating?.count ? rating.count : "No Data Found"}
            </p>
          </div>
        </div>
        <button className="btn mt-3 bg-green-600 text-white">Details</button>
      </div>
    </>
  );
}
