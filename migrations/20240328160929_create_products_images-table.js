/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
    return knex.schema
        .createTable("products_images", (table) => {
            table.increments("id").primary();
            table.integer('products_id').unsigned().references('products.id').onUpdate('CASCADE').onDelete('CASCADE');
            table.string("image_url").notNullable();
            table.boolean("main").notNullable();
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("products_images");
};

