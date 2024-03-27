/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
    return knex.schema
        .createTable("shops", (table) => {
            table.increments("id").primary();
            table.string("shop_name").notNullable();
            table.string("intro", 1000).notNullable();
            table.string("logo").notNullable();
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("shops");
};
