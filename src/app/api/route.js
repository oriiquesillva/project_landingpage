import { NextResponse } from "next/server";
import { SMTPClient } from "emailjs";

export async function POST(request) {
  const {message_data} = await request.json()
  
  const client = new SMTPClient({
    user: process.env.EMAIL,
    password: process.env.PASSWORD,
    host: "smtp.gmail.com",
    ssl: true,
  });

  try {
    const message = await client.sendAsync({
      text: message_data,
      from: "lsillva.teste@gmail.com ",
      to: "lsillva.teste@gmail.com",
      subject: "testing emailjs",
    });
    return NextResponse.json({message: "Inscrição efetuada com sucesso"})
  } catch (err) {
    console.error(err);
    return NextResponse.error();
  }
}