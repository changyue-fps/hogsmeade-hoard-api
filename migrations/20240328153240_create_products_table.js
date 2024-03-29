/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
    return knex.schema
        .createTable("products", (table) => {
            table.increments("id").primary();
            table.integer('shop_id').unsigned().references('shops.id').onUpdate('CASCADE').onDelete('CASCADE');
            table.string("product_name").notNullable();
            table.string("description", 1000).notNullable();
            table.integer("price_g").unsigned();
            table.integer("price_s").unsigned();
            table.integer("price_c").unsigned();
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("products");
};

