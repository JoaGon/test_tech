const moment = require('moment');

exports.getUTC = async (req, res) => {

    const data = req.body

    date = data.time
    hours = Number(date.match(/^(\d+)/)[1]);
    minutes = Number(date.match(/:(\d+)/)[1]);
    seconds = Number(date.match(/:(\d+):(\d+)/)[2]);

    d = new Date(2020, 2, 5, hours, minutes, seconds)
    utc = d.getTime();
    nd = new Date(utc + (3600000 * data.timezone));

    time = ('0' + nd.getHours()).slice(-2) + ':' + ('0' + nd.getMinutes()).slice(-2) + ':' + ('0' + nd.getSeconds()).slice(-2);

    let response = {
        time: time,
        timezone: "utc"
    }

    return res.status(200).json({
        response,
    })
}
