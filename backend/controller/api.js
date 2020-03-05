exports.getAnAdminQuot = async (req, res) => {
    const data = req.body
    console.log('data', data)
    return res.status(200).json({
        data
    })
}
