import React from "react";
import { FaEye, FaRegBookmark, FaStar } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
    tags,
  } = news;

  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200">
      {/* Author Info */}
      <div className="flex items-center gap-3 p-4 bg-base-200">
        <div className="avatar">
          <div className="w-10 h-10 rounded-full">
            <img src={author.img} alt={author.name} />
          </div>
        </div>
        <div>
          <h2 className="font-semibold">{author.name}</h2>
          <p className="text-sm text-gray-500">
            {new Date(author.published_date).toLocaleDateString()}
          </p>
        </div>
        <button className="ml-[300px] flex gap-2 overflow-x-hidden">
          <FaRegBookmark />
          <IoMdShare />
        </button>
      </div>

      {/* Thumbnail */}
      <figure>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-56 object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body">
        <h2 className="card-title text-lg font-bold">{title}</h2>
        <p className="text-gray-600 text-sm">
          {details.slice(0, 150)}...
          <span className="text-blue-500 cursor-pointer"> Read More</span>
        </p>

        {/* Tags */}
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4 border-t pt-3">
          <div className="flex items-center gap-2 text-orange-500">
            <FaStar />
            <span className="font-semibold">{rating.number}</span>
            {rating.badge && (
              <span className="ml-2 badge badge-warning text-white">
                {rating.badge}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
