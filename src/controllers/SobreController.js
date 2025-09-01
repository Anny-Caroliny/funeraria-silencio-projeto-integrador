const path = require("node:path")

module.exports = {
    index: (req,res) => {
        res.sendFile(path.join(__dirname, "../views/sobrenos.html"))
    },
     send: async (req, res) => {
        const { nome_contratante, email, whatsapp, nome_falecido, data_nascimento, data_falecimento, data_velorio, mensagem } = req.body;
        try {
            await db('contatos').insert({ nome_contratante, email, whatsapp, nome_falecido, data_nascimento, data_falecimento, data_velorio, mensagem })
            console.log("📩 Novo contato salvo no banco de dados")
        } catch {
            console.error("Erro ao enviar mensagem. Tente novamente mais tarde.")
        }
    }
}