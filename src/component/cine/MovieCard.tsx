/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState } from "react";
import { MovieContext } from "../../context";
import { getImageUrl } from "../utils/cine-utils";
import Modal from "./Modal";
import Rating from "./Rating";

const MovieCard = ({ movie  }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { cartData, setCartData }:any = useContext(MovieContext);
  const handleClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };
  const handleSetSelectedMovie = (movie: any) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleAddToCart = (e: any, movie: any) => {
    e.stopPropagation();
    const isExist = cartData.find((item: any) => item.id === movie.id);
    if (!isExist) {
      setCartData([...cartData, movie]);
    }
    else{
      console.log(`${movie.title} already exist`)
    }
  };
  return (
    <>
      {showModal && <Modal handleAddToCart={handleAddToCart} movie={selectedMovie} onClose={handleClose}></Modal>}

      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => handleSetSelectedMovie(movie)}>
          <img
            className="w-full object-cover"
            src={getImageUrl(movie.cover)}
            alt=""
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <Rating value={movie.rating}></Rating>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddToCart(e, movie)}
            >
              <img src="./assets/tag.svg" alt="" />
              <span> $ {movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCard;
