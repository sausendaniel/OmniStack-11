const conn = require("../db/conn");

module.exports = {
  async list(req, res) {
    const ong_id = req.headers.authorization;
    const incidents = await conn("incidents").where("ong_id", ong_id).select("*");

    return res.json(incidents);
  }
}