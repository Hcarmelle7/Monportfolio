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

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.warn("RESEND_API_KEY non configurée dans l'environnement serveur.");
      return NextResponse.json(
        {
          success: false,
          message:
            "Le service d'email est en cours de configuration. Vous pouvez me contacter directement à carmellerosy@icloud.com.",
        },
        { status: 503 }
      );
    }

    // Expédition vers l'API REST officielle de Resend (zéro dépendance, 100% côté serveur)
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Carmelle.dev <onboarding@resend.dev>",
        to: ["carmellerosy@icloud.com"],
        reply_to: String(email).trim(),
        subject: `Nouveau message sur Carmelle.dev de ${String(name).trim()}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
            <h2 style="color: #8b5cf6;">Nouveau message depuis Carmelle.dev</h2>
            <p><strong>Nom :</strong> ${String(name).trim()}</p>
            <p><strong>Email :</strong> <a href="mailto:${String(email).trim()}">${String(email).trim()}</a></p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p><strong>Message :</strong></p>
            <p style="white-space: pre-wrap; line-height: 1.6; color: #333;">${String(message).trim()}</p>
          </div>
        `,
      }),
    });

    const data = await response.json();

    if (response.ok && data.id) {
      return NextResponse.json({
        success: true,
        message: "Message reçu et expédié avec succès.",
      });
    }

    return NextResponse.json(
      { success: false, message: data.message || "Erreur lors de l'expédition du message." },
      { status: response.status || 502 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Erreur serveur." },
      { status: 500 }
    );
  }
}
