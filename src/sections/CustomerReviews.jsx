import { ReviewCard } from "../components";

const CustomerReviews = () => {
  return (
    <section className="max-container w-full flex flex-col justify-center items-center gap-8">
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-4xl font-palanquin font-bold text-center">
          What Our <span className="text-coral-red">Customers</span> Say?
        </h2>
        <p className="info-text max-w-lg text-center">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <div className="flex-1">
        <ReviewCard />
      </div>
    </section>
  );
};

export default CustomerReviews;
