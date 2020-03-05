

exports.getUTC = async (req, res) => {
    const data = req.body

    const response = data
    return res.status(200).json({
        response,
        message:'succes'
    })
}
