export default () => {
    new Response(`Hola vengo desde la env: ${process.env.TEST}`);
}