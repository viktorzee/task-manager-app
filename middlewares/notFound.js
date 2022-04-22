const notFound = (req, res) => res.status(404).send(`Route does not Exit`)

module.exports = notFound