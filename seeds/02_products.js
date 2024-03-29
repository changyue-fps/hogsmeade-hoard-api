/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('products').del();
    await knex('products').insert([
      {
        id: 1,
        shop_id: 1,
        product_name: "Chocolate Frogs",
        description: "Leap into enchantment with our Chocolate Frogs—each bite a blend of rich, creamy chocolate with a magical twist. Discover a collectible wizard card in every package, making each frog a treasure for both taste buds and collectors alike. Perfect for sharing with fellow wizards or keeping all to yourself. Are you ready to catch yours?",
        price_g: 0,
        price_s: 6,
        price_c: 28,
      },
      {
        id: 2,
        shop_id: 1,
        product_name: "Bertie Bott's Every Flavour Beans",
        description: "Dare to taste the magic with Bertie Bott's Every Flavour Beans—where each bean is an adventure! From delightful strawberries to shocking surprises like earwax, no two beans are the same. Perfect for parties or as a daring gift, these whimsical treats promise a journey of flavors. Are you brave enough to try?",
        price_g: 0,
        price_s: 14,
        price_c: 26,
      },
      {
        id: 3,
        shop_id: 1,
        product_name: "Cauldron Cakes",
        description: "Indulge in the spellbinding sweetness of Cauldron Cakes, a delectable treat straight from the wizarding world's kitchens. Each cake is a perfect blend of moist, fluffy sponge and a secret, enchanting filling that's guaranteed to bewitch your taste buds. Shaped like a miniature cauldron and dusted with edible gold, these cakes are not just a dessert, but a magical experience. Ideal for wizarding parties or as a delightful surprise for any muggle or wizard alike. Ready to dip into the magic?",
        price_g: 0,
        price_s: 4,
        price_c: 0,
      },
      {
        id: 4,
        shop_id: 1,
        product_name: "Drooble's Best Blowing Gum",
        description: "Discover the wonder of Drooble's Best Blowing Gum, where each piece is a gateway to fun and flavor. Famous for its ability to produce giant, iridescent bubbles that last, this gum isn't just about taste—it's an experience. Infused with a mystery flavor that changes as you chew, it's perfect for wizards and muggles craving a bit of magic in their day. Ideal for bubble-blowing contests or as a playful gift, Drooble's promises endless entertainment. Ready to blow the biggest bubble?",
        price_g: 0,
        price_s: 11,
        price_c: 28,
      },
      {
        id: 5,
        shop_id: 1,
        product_name: "Fizzing Whizzbees",
        description: "Fizzing Whizzbees take your taste buds on a soaring adventure with each fizzy bite! These enchanting sherbet balls not only tantalize with their sweet, sparkly taste but also have the magical ability to make you feel like you're floating. Perfect for sharing a giggle with friends or for those moments when you crave a lift, Fizzing Whizzbees are a must-have for anyone seeking a sprinkle of joy. Dive into the whimsy—where will Fizzing Whizzbees take you?",
        price_g: 0,
        price_s: 15,
        price_c: 12,
      },
      {
        id: 6,
        shop_id: 1,
        product_name: "Pink Coconut Ice",
        description: "Pink Coconut Ice is a whimsical delight, blending the creamy richness of coconut with a sweet, sugary twist. Each bite is a soft, melt-in-your-mouth experience, wrapped in a playful pink hue that promises pure pleasure. Perfect for a magical snack or as a charming gift for friends who love a touch of enchantment in their treats. Step into a world of flavor where Pink Coconut Ice turns any moment into a sweet, fairy-tale escape. Ready to indulge in the magic?",
        price_g: 0,
        price_s: 15,
        price_c: 12,
      },
    ]);
  };