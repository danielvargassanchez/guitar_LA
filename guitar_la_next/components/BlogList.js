import BlogItem from "../components/BlogItem";
import styles from "../styles/Blogs.module.css";
const BlogList = ({ blogs }) => {
  return (
    <div>
      <h2 className="heading">Blog</h2>
      <div className={styles.blog}>
        {blogs.map((blogItem) => (
          <BlogItem key={blogItem.id} blogItem={blogItem} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
