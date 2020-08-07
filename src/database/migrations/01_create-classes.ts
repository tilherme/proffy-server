
import Knex from 'knex';

//Realiza alterações no banco
export async function up(knex: Knex) {
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary;
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();
        //relaciona com o ID do usuário
        //CASCADE atualiza os ids se o id for att na tabela users, e remove as classes se o id for removido
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
}

//Desfaz alterações no banco
export async function down(knex: Knex) {
    return knex.schema.dropTable('classes');
}