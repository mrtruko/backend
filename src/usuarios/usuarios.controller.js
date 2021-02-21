const getUsuarios = (req, res) => {
    res.json({
        ok: true,
        usuarios: []
    })
}

const setUsuarios = (req, res) => {
    res.json({
        ok: true,
        usuarios: []
    })
}



module.exports = {
    getUsuarios,
    setUsuarios
}