import React from "react";

interface OrderButtonProps {
  productName: string;
  productPrice: string;
  productDescription: string;
}

const OrderButton: React.FC<OrderButtonProps> = ({ productName, productPrice, productDescription }) => {
  const phoneNumber = "1234567890"; // Remplace par ton numéro WhatsApp
  const message = `Bonjour, je suis intéressé par le produit suivant :\n\nNom : ${productName}\nPrix : ${productPrice}\nDescription : ${productDescription}\n\nMerci !`;

  const handleOrderClick = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <button
      onClick={handleOrderClick}
      className="mt-4 py-2 px-6 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-300"
    >
      Commander
    </button>
  );
};

export default OrderButton;
