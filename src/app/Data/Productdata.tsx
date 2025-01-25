export const productdata = [
  {
    id: "1",
    title: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp25,000,00",
    discountPrice: "Rp 30,000,00",
    imageSrc: "/images/syltherine.png",
    isNew: true,
    badge: "-30%",
    badgeColor: "green" as const, // Using `as const` here
  },
  {
    id: "2",
    title: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp25,000,00",
    imageSrc: "/images/leviosa.png",
    badgeColor: "green" as const, // Using `as const` here
  },
  {
    id: "3",
    title: "Lotilo",
    description: "Luxury big sofa",
    price: "Rp7,000,00",
    discountPrice: "Rp 14,000,00",
    imageSrc: "/images/lolito.png",
    isNew: true,
    badge: "-50%",
    badgeColor: "red" as const, // Using `as const` here
  },
  {
    id: "4",
    title: "Respira",
    description: "Outdoor Bar table and stool",
    price: "Rp500.000",
    imageSrc: "/images/respira.png",
    isNew: true,
    badgeColor: "green" as const, // Using `as const` here
  },
  {
    id: "5",
    title: "Grifo",
    description: "Night Lamp",
    price: "Rp1.500.000",
    imageSrc: "/images/grifo.png",
    // No badgeColor here, so no need to change it
  },
  {
    id: "6",
    title: "Muggo",
    description: "Small Mug",
    price: "Rp1.500.000",
    imageSrc: "/images/muggo.png",
    isNew: true,
    badgeColor: "green" as const, // Using `as const` here
  },
  {
    id: "7",
    title: "Pingkey",
    description: "Cut bed set",
    price: "Rp7.00.000",
    discountPrice: "Rp 14,000,00",
    imageSrc: "/images/pingky.png",
    isNew: true,
    badge: "-50%",
    badgeColor: "red" as const, // Using `as const` here
  },
  {
    id: "8",
    title: "Potty",
    description: "Minimilist flower pot",
    price: "Rp500.000",
    imageSrc: "/images/potty.png",
    isNew: true,
    badgeColor: "green" as const, // Using `as const` here
  },
  {
    id: "9",
    title: "Plain console_",
    imageSrc: "/Assets/Image 18.png",
    price: 258200.0,
    description: "A versatile plain console that fits any space with ease.",
  },
  {
    id: "10",
    title: "Reclaimed teak Sideboard",
    imageSrc: "/Assets/Image 19.png",
    price: 20000.0,
    description: "Beautiful sideboard crafted from reclaimed teak for storage and style.",
  },
  {
    id: "11",
    title: "SJP_0825",
    imageSrc: "/Assets/Image 20.png",
    price: 200000.0,
    description: "A statement piece that adds character to your space.",
  },
  {
    id: "12",
    title: "Bella chair and table",
    imageSrc: "/Assets/Image 21.png",
    price: 100000.0,
    description: "Elegant Bella chair and table set for a sophisticated setting.",
  },
  {
    id: "13",
    title: "Granite square side table",
    imageSrc: "/Assets/Image 22.png",
    price: 258800.0,
    description: "A sturdy and stylish granite square side table.",
  },
  {
    id: "14",
    title: "Asgaard sofa",
    imageSrc: "/Assets/Image 23.png",
    price: 250000.0,
    description: "A comfortable and contemporary Asgaard sofa.",
  },
  {
    id: "15",
    title: "Maya sofa three seater",
    imageSrc: "/Assets/Image 24.png",
    price: 115000.0,
    description: "Spacious Maya sofa three-seater for your living room.",
  },
  {
    id: "16",
    title: "Outdoor sofa set",
    imageSrc: "/Assets/Image 25.png",
    price: 244000.0,
    description: "Durable and stylish outdoor sofa set for outdoor relaxation.",
  },
  {
    id: "17",
    title: "Rocket Single Seater",
    imageSrc: "/Assets/Image 1.png",
    price: 300000.0,
    description: "A comfortable Rocket Single Seater sofa perfect for any living room.",
  },
];

interface ProductProps {
  description: string;
  id: string;
  title: string;
  imageSrc: string;
  price: string | number;
}

export async function getProductById(id: string): Promise<ProductProps | null> {
  return productdata.find((product) => product.id === id) || null;
}
