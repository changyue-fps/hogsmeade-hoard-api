/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('shops').del();
    await knex('shops').insert([
      {
        id: 1,
        shop_name: 'Honeydukes',
        intro: "Join us for a tour of Honeydukes, where every click through our aisles reveals surprises and delights worthy of any witch or wizard. With special features, interactive games, and a chance to create your own magical candy concoctions, the Honeydukes page on Hogsmeade Hoard is your gateway to experiencing the magic of the wizarding world's most beloved sweet shop. Let the magic begin!",
        logo: "/shops/honeydukes.png"
      },
      {
        id: 2,
        shop_name: "Zonko's Joke Shop",
        intro: "Venture into the world of endless laughter and mischief at Zonko's Joke Shop, a cornerstone of jocular enchantment in the wizarding world. Famed for its shelves bursting with tricks and novelties, Zonko's is your go-to destination for Fanged Frisbees, Dungbombs, and the ever-popular Nose-Biting Teacups. Each visit promises a journey filled with chuckles and glee, making it the perfect haunt for aspiring pranksters and those looking to add a spark of fun to their magical lives. Explore our collection and let the pranks unfold, leaving you with unforgettable memories and laughter in your heart.",
        logo: '/shops/zonkos.png',
      },
      {
        id: 3,
        shop_name: "Weasleys' Wizard Wheezes",
        intro: "Step into the vibrant world of Weasley's Wizard Wheezes, where magic and merriment meet in a spectacular explosion of color and creativity. Founded by the ingenious Weasley twins, this emporium of eccentricities offers everything from Peruvian Instant Darkness Powder to Skiving Snackboxes, ensuring your days are filled with surprise and delight. More than just a joke shop, it's a testament to the wonders of wizarding ingenuity and the joy of breaking the mundane. Whether you're plotting your next playful endeavor or seeking a spellbinding gift, Weasley's Wizard Wheezes has a trick up its sleeve just for you.",
        logo: '/shops/www.png',
      },
    ]);
  };