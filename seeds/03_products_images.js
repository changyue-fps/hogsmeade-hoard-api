/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('products_images').del();
    await knex('products_images').insert([
      {
        id: 1,
        products_id: 1,
        image_url: "/products/chocolate-frogs-01.png",
        main: true 
      },
      {
        id: 2,
        products_id: 1,
        image_url: "/products/chocolate-frogs-02.png",
        main: false 
      },
      {
        id: 3,
        products_id: 1,
        image_url: "/products/chocolate-frogs-03.png",
        main: false 
      },
      {
        id: 4,
        products_id: 2,
        image_url: "/products/bertie-01.png",
        main: true 
      },
      {
        id: 5,
        products_id: 2,
        image_url: "/products/bertie-02.png",
        main: false 
      },
      {
        id: 6,
        products_id: 3,
        image_url: "/products/cauldron-cake-01.png",
        main: true 
      },
      {
        id: 7,
        products_id: 4,
        image_url: "/products/drooble-01.png",
        main: true 
      },
      {
        id: 8,
        products_id: 5,
        image_url: "/products/fizzing-01.png",
        main: true 
      },
      {
        id: 9,
        products_id: 6,
        image_url: "/products/pink-01.jpeg",
        main: true 
      },
    ]);
  };