import Image from "next/image";
import { Share2, Heart, BarChart2 } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  title: string;
  description?: string;
  price: string | number;
  discountPrice?: string;
  imageSrc?: string;
  isNew?: boolean;
  badge?: string;
  badgeColor?: string;  // Change to 'string' to allow any string
}


const Product: React.FC<ProductCardProps> = ({
  id,
  title,
  description,
  imageSrc = "",
  price,
  discountPrice,
  isNew,
  badge,
  badgeColor, // Use badgeColor to display the badge
}) => {
  return (
    <div className="group relative">
      <div className="w-[285px] h-[446px] max-w-sm bg-[#F4F5F7] shadow dark:bg-gray-800 dark:border-gray-700">
        {isNew && badgeColor && ( // Apply badgeColor correctly
          <span
            className={`absolute top-2 right-2 w-[48px] h-[48px] ${
              badgeColor === "green" ? "bg-[#2EC1AC]" : "bg-[#E97171]"
            } text-white text-xs font-semibold flex items-center justify-center rounded-full`}
          >
            {badge || "New"}
          </span>
        )}
        <Image src={imageSrc} alt={title} width={285} height={301} />

        <div className="px-5 pb-5">
          <div className="mt-4 md:mb-16">
            <h2 className="text-[#3A3A3A] text-1xl md:text-2xl font-bold">
              {title}
            </h2>
            <h6 className="text-xs mt-2 sm:text-xs md:text-base text-[#898989]">
              {description}
            </h6>
            <h2 className="text-[#3A3A3A] mt-2 text-1xl md:text-1xl font-bold flex items-center">
              <span className="text-[#3A3A3A]">{price}</span>
              {discountPrice && (
                <span className="line-through text-xs text-gray-500 ml-4">
                  {discountPrice}
                </span>
              )}
            </h2>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link href={`/Products/${id}`}>
              <button className="w-52 bg-white text-[#B88E2F] px-10 py-3 rounded-sm hover:bg-[#B88E2F] hover:text-white transition-colors duration-300">
                Add to cart
              </button>
            </Link>
          </div>
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-4 text-white">
            <button className="flex items-center gap-2 hover:text-[#B88E2F] transition-colors">
              <Share2 className="w-5 h-5" />
              Share
            </button>
            <button className="flex items-center gap-2 hover:text-[#B88E2F] transition-colors">
              <BarChart2 className="w-5 h-5" />
              Compare
            </button>
            <button className="flex items-center gap-2 hover:text-[#B88E2F] transition-colors">
              <Heart className="w-5 h-5" />
              Like
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
