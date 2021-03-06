const crypto = require("crypto");

const conn = require("../db/conn");

module.exports = {
  async list(req, res) {
    const ongs = await conn("ongs").select("*");
  
    return res.json(ongs);
  },

  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;
    const id = crypto.randomBytes(4).toString("HEX");
    await conn("ongs").insert({ id, name, email, whatsapp, city, uf })
    
    return res.json({ id });
  },

  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;
    const ong = await conn("ongs").where("id", id).select("id").first();
    if (ong.id !== ong_id){
      return res.status(401).json({ error: "Operation not permitted." })
    }
    await conn("ongs").where("id", id).delete();

    return res.json({ success: "ONG deleted." });
  }
}