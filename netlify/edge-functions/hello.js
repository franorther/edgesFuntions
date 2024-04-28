import dotenv from 'dotenv';
dotenv.config()
export default async () => {
    console.log('HOlaa');
  return  new Response(`Hola vengo desde la env:`);
}