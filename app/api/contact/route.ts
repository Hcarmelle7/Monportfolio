import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Tous les champs sont requis." },
        { status: 400 }
      );
    }

    // Validation du format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Adresse email invalide." },
        { status: 400 }
      );
    }

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY ||
      process.env.WEB3FORMS_KEY ||
      "6380c6de-d423-4bb4-a048-018fd729e23f";

    // Expédition vers le service Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: String(name).trim(),
        email: String(email).trim(),
        message: String(message).trim(),
        subject: `Nouveau message sur Carmelle.dev de ${String(name).trim()}`,
        from_name: "Portfolio Carmelle.dev",
      }),
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({
        success: true,
        message: "Message reçu et expédié avec succès.",
      });
    }

    return NextResponse.json(
      { success: false, message: data.message || "Erreur lors de l'expédition du message." },
      { status: 502 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Erreur serveur." },
      { status: 500 }
    );
  }
}
