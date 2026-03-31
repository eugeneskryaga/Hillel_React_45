import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getProductById } from "../../services/productsApi";
import type { Product } from "../../types/Product";

export const Reviews = () => {
  const { id } = useParams();
  const numericId = Number(id);
  const {
    data: reviews,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["reviews", numericId],
    queryFn: async () => {
      const product = await getProductById(numericId as Product["id"]);
      return product.reviews;
    },
  });

  return (
    <>
      <h3>Reviews</h3>
      {reviews?.map((review, index) => (
        <div key={index}>
          <p>
            <strong>{review.reviewerName}</strong>
          </p>
          <p>Email: {review.reviewerEmail}</p>
          <p>Date: {new Date(review.date).toLocaleDateString()}</p>
          <p>Rating: {review.rating}</p>
          <p>Review: {review.comment}</p>
        </div>
      ))}
      {isLoading && <p>Loading...</p>}
      {isError && <p>It`s an error.</p>}
    </>
  );
};
