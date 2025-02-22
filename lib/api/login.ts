// /pages/api/login.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // Identifiants en dur pour test
    if (email === "admin@example.com" && password === "adminpassword") {
      return res.status(200).json({
        token: "fake-jwt-token",
        role: "admin", // Rôle d'administrateur
      });
    } else {
      return res.status(401).json({ message: "Nom d'utilisateur ou mot de passe incorrect." });
    }
  } else {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }
}
