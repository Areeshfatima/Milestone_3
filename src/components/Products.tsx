import Image from "next/image";
interface Product {
  id: number;
  name: string;
  price: number;
  imageSrc: string;
  imageAlt: string;
}

interface ProductsProps {
  products: Product[];
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-lg">
              <div className="relative w-full h-48">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold mt-4">{product.name}</h3>
              <p className="text-red-600 text-lg font-semibold">
                ${product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
