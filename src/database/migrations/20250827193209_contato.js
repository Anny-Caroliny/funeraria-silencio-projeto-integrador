/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('contatos', (table) => {
        table.increments('id').primary();
        table.string('nome_contratante').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('nome_falecido').notNullable();
        table.date('data_nascimento').notNullable();
        table.date('data_falecimento').notNullable();
        table.date('data_velorio').notNullable();
        table.string('mensagem').notNullable();
        table.timestamps(true, true);
    })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('contatos');
};
