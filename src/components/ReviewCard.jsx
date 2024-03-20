import { reviews } from "../constants";

const ReviewCard = () => {
  return reviews.map((review, index) => (
    <div key={index}>{review.customerName}</div>
  ));
};

export default ReviewCard;
