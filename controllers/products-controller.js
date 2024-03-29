const knex = require("knex")(require("../knexfile"));

const index = async (req, res) => {
  try {
    console.log(req.query.SHOP_ID);
    const result = await fetchProductsWithImages(req.query.SHOP_ID);
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: `unable to get categories: ${error}`,
    });
  }
};

const findOne = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await fetchProductWithImages(productId);

        if (product) {
            res.json(product);
        } else {
            res.status(404).send('Product not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}

// Helper functions for fetching products and images
async function fetchProducts(shopId) {
  let query = knex("products");
  if (shopId) {
    query = query.where({ shop_id: shopId });
  }

  try {
    const products = await query.select();
    return products;
  } catch (error) {
    console.error("Error fetching products", error);
    throw error;
  }
}

async function addImagesToProducts(products) {
  const productIds = products.map((product) => product.id);

  const images = await knex("products_images").whereIn(
    "products_id",
    productIds
  );

  const imagesByProductId = images.reduce((acc, image) => {
    if (!acc[image.products_id]) {
      acc[image.products_id] = [];
    }

    acc[image.products_id].push(image);
    return acc;
  }, {});

  const productsWithImages = products.map((product) => ({
    ...product,
    images: imagesByProductId[product.id] || [],
  }));

  return productsWithImages;
}

async function fetchProductsWithImages(shopId) {
  const products = await fetchProducts(shopId);
  const productsWithImages = await addImagesToProducts(products);
  return productsWithImages;
}

async function fetchProductWithImages(productId) {
    const product = await knex('products').where('id', productId).first();

    if (!product) {
        return null;
    }

    const images = await knex("products_images").where('products_id', productId);

    const productWithImages = {
        ...product,
        images: images,
    };

    return productWithImages;
}

module.exports = {
  index,
  findOne,
};
