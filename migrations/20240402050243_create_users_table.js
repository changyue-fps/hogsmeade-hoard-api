/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
    return knex.schema.createTable("users", (table) => {
      table.increments("id").primary();
      table.string("user_name").notNullable();
      table.string("email").notNullable().unique();
      table.string("password_encrypted").notNullable();
    })
    .createTable("likes", (table) => {
      table.increments('id').primary(); 
      table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE');
      table.integer('product_id').unsigned().references('products.id').onDelete('CASCADE'); 
  });
  }
  
  /**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
  exports.down = function (knex) {
    return knex.schema.dropTable("likes").dropTable("users");
  };