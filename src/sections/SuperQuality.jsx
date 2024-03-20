import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section className="w-full max-container">
      <div className="mt-12 flex-1 flex flex-row max-sm:flex-col-reverse justify-center items-center">
        <div>
          <h2 className="text-4xl font-montserrat font-bold max-w-lg">
            We Provide You <span className="text-coral-red">Super Quality</span>{" "}
            Products
          </h2>
          <p className="text-slate-gray max-w-md mt-6">
            Our products are made from the best materials and are designed for
            long-lasting comfort and style. We are committed to providing you
            with the best quality products.
          </p>
          <br />
          <p className="text-slate-gray max-w-md">
            We are committed to providing you with the best quality products.
          </p>
          <div className="mt-12">
            <Button label="View details" />
          </div>
        </div>
        <div>
          <img
            src={shoe8}
            alt="Super Quality"
            width={600}
            height={600}
            className="object-cover mt-6"
          />
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
