const index = (req, res) => {
    res.send('Respuesta desde GET')
}
const store = (req, res) => {
    res.status(201).send('Respuesta desde POST')
}
const update = (req, res) => {
    res.status(200).send('Respuesta desde PUT')
}
const destroy = (req, res) => {
    res.status(200).send('Respuesta desde DELETE')
}


module.exports = {
    index,
    store,
    update,
    destroy
}