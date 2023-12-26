import nike1 from "../assets/n1-min.png";

const ShoeDetails = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex-1">
        <img src={nike1} alt="nike" />
      </div>
      <div className="flex-1">
        <div>Nike Air Max 270 The Nike Air Max</div>
        <div>
          The Nike Air Max 270 is a lifestyle shoe that's sure to turn heads
          with its vibrant color gradient.
        </div>
        <div>100 $</div>
      </div>
    </div>
  );
};

export default ShoeDetails;
