import { Resend } from "resend";
import { EmailTemplate } from "../../components/Web/email-template";

// Define the types for the request body
interface RequestBody {
  Nombre: string;
  Teléfono: string;
  Email: string;
  FechaNac: string;
  Mensaje: string;
  laLocation?: string;
  laDateSelection?: { startDate: string; endDate: string }[];
  laHora?: string;
  vehiculoAAlquilar:string
}

// Initialize Resend with the API key
const resend = new Resend("re_8CKS6g7H_EvLaLDXN6GbM6CqXWWsaWxJh");

export async function POST(req: Request): Promise<Response> {
  console.log("LA REQUEST: ", req);
  try {
    // Parse the request body
    const body: RequestBody = await req.json();
    console.log("EL BODY: ",body);
    

    const {
      Nombre,
      Teléfono,
      Email,
      FechaNac,
      Mensaje,
      laLocation,
      laDateSelection,
      laHora,
      vehiculoAAlquilar
    } = body;

    // Validate the required fields
    if (!Nombre || !Teléfono || !Email || !FechaNac || !Mensaje) {
      return new Response(
        JSON.stringify({
          error: "Missing required fields",
          reqBody: body,
        }),
        { status: 400 }
      );
    }

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["enzopch2022@gmail.com"],
      subject: "Consulta de Disponibilidad de alquiler",
      react: EmailTemplate({
        Nombre,
        Teléfono,
        Email,
        FechaNac,
        Mensaje,
        laLocation,
        laDateSelection,
        laHora,
        vehiculoAAlquilar
      }),
      text: "JEJJE",
    });

    if (error) {
      console.error("Error from resend.emails.send:", error);
      return new Response(JSON.stringify({ error }), { status: 400 });
    }

    return new Response(JSON.stringify(data));
  } catch (error) {
    console.error("Caught error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}