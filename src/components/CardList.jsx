/* eslint-disable no-unused-vars */
import React from "react";

function CardList() {
  // Data untuk card
  const cardData = [
    {
      imageUrl: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
      title: "Shoes!",
      description: "If a dog chews shoes whose shoes does he choose?"
    },
    {
      imageUrl: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
      title: "Shoes!",
      description: "If a dog chews shoes whose shoes does he choose?"
    },
    {
      imageUrl: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
      title: "Shoes!",
      description: "If a dog chews shoes whose shoes does he choose?"
    },
    {
      imageUrl: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
      title: "Shoes!",
      description: "If a dog chews shoes whose shoes does he choose?"
    },
    {
      imageUrl: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
      title: "Shoes!",
      description: "If a dog chews shoes whose shoes does he choose?"
    },
    {
      imageUrl: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
      title: "Shoes!",
      description: "If a dog chews shoes whose shoes does he choose?"
    },
    // Tambahkan data lainnya jika diperlukan
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {/* Menggunakan map untuk membuat card berdasarkan data */}
      {cardData.map((card, index) => (
        <div key={index} className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure><img src={card.imageUrl} alt={card.title} /></figure>
          <div className="card-body">
            <h2 className="card-title">{card.title}</h2>
            <p>{card.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Wacth Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardList;
