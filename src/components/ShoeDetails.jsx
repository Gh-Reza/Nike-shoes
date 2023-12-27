import nike1 from "../assets/n1-min.png";

const ShoeDetails = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse">
      <div className="flex-1">
        <img src={nike1} alt="nike" />
      </div>
      <div className="flex flex-col flex-1 space-y-6">
        <div className="text-5xl font-black lg:text-7xl">
          Nike Air Max 270 The Nike Air Max
        </div>
        <div className="mt-4 text-xl">
          {
            "The Nike Air Max 270 is a lifestyle shoe that's sure to turn heads with its vibrant color gradient."
          }
        </div>
        <div className="text-5xl font-bold">100 $</div>
      </div>
    </div>
  );
};

export default ShoeDetails;
