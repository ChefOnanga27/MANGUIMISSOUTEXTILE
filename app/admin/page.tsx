"use client";
import { useState, useEffect } from "react";

// Simulons des données pour les articles
const mockArticles = [
  { id: 1, title: "Article 1", description: "Description de l'article 1", price: "15€", image: "https://via.placeholder.com/150" },
  { id: 2, title: "Article 2", description: "Description de l'article 2", price: "25€", image: "https://via.placeholder.com/150" },
  { id: 3, title: "Article 3", description: "Description de l'article 3", price: "30€", image: "https://via.placeholder.com/150" },
];

export default function Dashboard() {
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [selectedSection, setSelectedSection] = useState("articles");
  const [articles, setArticles] = useState(mockArticles);
  const [newArticle, setNewArticle] = useState({ title: "", description: "", price: "", image: "" });
  const [comments, setComments] = useState<{ name: string, comment: string }[]>([]);
  const [newComment, setNewComment] = useState({ name: "", comment: "" });

  useEffect(() => {
    const messages = ["Bienvenue sur le tableau de bord !", "Heureux de vous voir ici !", "Passez une excellente journée !"];
    let index = 0;

    const interval = setInterval(() => {
      setWelcomeMessage(messages[index]);
      index = (index + 1) % messages.length;
    }, 3000); // Change le message toutes les 3 secondes

    return () => clearInterval(interval);
  }, []);

  const addArticle = () => {
    if (newArticle.title && newArticle.description && newArticle.price && newArticle.image) {
      setArticles([...articles, { ...newArticle, id: articles.length + 1 }]);
      setNewArticle({ title: "", description: "", price: "", image: "" }); // Reset form
    }
  };

  const deleteArticle = (id: number) => {
    setArticles(articles.filter(article => article.id !== id));
  };

  const editArticle = (id: number, updatedContent: string) => {
    setArticles(articles.map(article =>
      article.id === id ? { ...article, description: updatedContent } : article
    ));
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewArticle({ ...newArticle, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCommentSubmit = () => {
    if (newComment.name && newComment.comment) {
      setComments([...comments, newComment]);
      setNewComment({ name: "", comment: "" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-r from-blue-500 to-teal-400">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-teal-500 p-6 text-white flex flex-col h-screen">
        <h2 className="text-2xl font-bold mb-6">Menu</h2>
        <button
          onClick={() => setSelectedSection("articles")}
          className="mb-4 p-2 bg-teal-700 rounded-md hover:bg-teal-800"
        >
          Articles
        </button>
        <button
          onClick={() => setSelectedSection("comments")}
          className="mb-4 p-2 bg-teal-700 rounded-md hover:bg-teal-800"
        >
          Commentaires
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8 bg-white md:bg-gradient-to-r from-blue-500 to-teal-400 min-h-screen">
        {/* Message de bienvenue animé */}
        <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md mb-8">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-6 animate-pulse">{welcomeMessage}</h2>
        </div>

        {/* Affichage du contenu en fonction de la section sélectionnée */}
        {selectedSection === "articles" && (
          <div className="w-full max-w-full bg-white p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Articles</h3>

            {/* Ajouter un nouvel article */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Titre de l'article"
                className="p-2 border border-gray-300 rounded-lg w-full mb-2"
                value={newArticle.title}
                onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
              />
              <textarea
                placeholder="Description de l'article"
                className="p-2 border border-gray-300 rounded-lg w-full mb-2"
                value={newArticle.description}
                onChange={(e) => setNewArticle({ ...newArticle, description: e.target.value })}
              />
              <input
                type="text"
                placeholder="Prix"
                className="p-2 border border-gray-300 rounded-lg w-full mb-2"
                value={newArticle.price}
                onChange={(e) => setNewArticle({ ...newArticle, price: e.target.value })}
              />

              {/* Champ pour télécharger l'image */}
              <input
                type="file"
                accept="image/*"
                className="p-2 border border-gray-300 rounded-lg w-full mb-2"
                onChange={handleImageChange}
              />
              {newArticle.image && <img src={newArticle.image} alt="Image de l'article" className="w-32 h-32 object-cover mt-2" />}

              <button
                onClick={addArticle}
                className="mt-2 p-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
              >
                Ajouter l'article
              </button>
            </div>

            {/* Liste des articles */}
            <ul className="space-y-4">
              {articles.map((article) => (
                <li key={article.id} className="p-4 border border-gray-300 rounded-lg">
                  <img src={article.image} alt={article.title} className="w-32 h-32 object-cover mb-4" />
                  <h4 className="text-xl font-semibold">{article.title}</h4>
                  <p className="text-gray-600">{article.description}</p>
                  <p className="text-green-600 font-bold">{article.price}</p>

                  {/* Options pour supprimer ou modifier l'article */}
                  <div className="mt-4 flex space-x-4">
                    <button
                      onClick={() => deleteArticle(article.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Supprimer
                    </button>
                    <button
                      onClick={() => editArticle(article.id, "Description modifiée !")}
                      className="text-teal-600 hover:text-teal-800"
                    >
                      Modifier
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {selectedSection === "comments" && (
          <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">

            {/* Affichage des commentaires */}
            <div className="mt-8">
              <h4 className="text-xl font-bold text-blue-700 mb-4">Commentaires</h4>
              <ul className="space-y-4">
                {comments.map((comment, index) => (
                  <li key={index} className="p-4 border border-gray-300 rounded-lg">
                    <p className="font-semibold">{comment.name}</p>
                    <p className="text-gray-600">{comment.comment}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
