class ProductManager {
    constructor() {
      this.products = [];
    }
  
    getProducts() {
      return this.products;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      const isCodeDuplicate = this.products.some((product) => product.code === code);
  
      if (isCodeDuplicate) {
        throw new Error(`El código '${code}' ya existe en otro producto.`);
      }
  
      const id = this.generateUniqueId();
      const product = {
        id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
      this.products.push(product);
    }
  
    getProductById(id) {
      const product = this.products.find((p) => p.id === id);
  
      if (!product) {
        throw new Error(`No se encontró ningún producto con ID '${id}'.`);
      }
  
      return product;
    }
  
    generateUniqueId() {
      return Date.now().toString();
    }
  }
  
  const manager = new ProductManager();
  
  manager.addProduct("producto prueba", "Este es un producto prueba", 20000, "img/foto1.jpg", "Ac23", 15);
  console.log(manager.getProducts());
  
  // Obtener un producto por su ID 
  try {
    const foundProduct = manager.getProductById("1"); // Suponiendo que el ID del producto sea "1"
    console.log("Producto encontrado:", foundProduct);
  } catch (error) {
    console.error(error.message);
  }
  
  // Intentar obtener un producto con un ID que no existe (debería arrojar un error)
  try {
    const notFoundProduct = manager.getProductById("2"); // Suponiendo que no existe un producto con ID "2"
    console.log("Producto encontrado:", notFoundProduct);
  } catch (error) {
    console.error(error.message);
  }
  