import { graphql } from 'gatsby';
import ProductCard from '../components/ProductCard';
import '../styles/products.css';

const ProductsPage = ({ data }) => {
  const products = data.allMarkdownRemark.nodes;

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard
          key={product.frontmatter.title}
          title={product.frontmatter.title}
          price={product.frontmatter.price}
          description={product.frontmatter.description}
          image={product.frontmatter.image}
        />
      ))}
    </div>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fields: { collection: { eq: "products" } } }) {
      nodes {
        frontmatter {
          title
          price
          description
          image
        }
      }
    }
  }
`;

export default ProductsPage; 