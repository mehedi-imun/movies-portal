import start from "../../assets/star.svg";
type IRating = {
  value: number;
};
const Rating = ({ value }: IRating) => {
  const starts = Array(value).fill(start);
  return (
    <div className="flex items-center space-x-1 mb-5">
      {starts.map((start, index) => (
        <img key={index} src={start} width="14" height="14" alt="" />
      ))}
    </div>
  );
};

export default Rating;
