
const verificar = (req, res, next) => {
  let token = req.headers['x-access-token'];
  if(!token) return res.status(403).json({message: 'No hay token'})
  console.log(token);
  next()
}

export default verificar
