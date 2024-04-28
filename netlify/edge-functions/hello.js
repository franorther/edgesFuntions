import dotenv from 'dotenv';
dotenv.config()
export default async () => {
  return  new Response(`Hola vengo desde la env: ${process.env.TEST}`);
}