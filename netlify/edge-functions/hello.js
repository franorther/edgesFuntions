import dotenv from 'dotenv';
dotenv.config()
export default async () => {
    console.log(process.env.TEST);
  return  new Response(`Hola vengo desde la env:`);
}