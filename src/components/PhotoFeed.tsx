import type { FC } from 'react';
import { mockPosts } from '../store/mockData';
import type { Post } from '../store/mockData';
import styles from './PhotoFeed.module.css';

const PhotoFeed: FC = () => {
  const renderPost = (post: Post) => {
    const filterStyle = post.filter ? { filter: `${post.filter}(100%)` } : {};
    
    return (
      <article key={post.id} className={styles.post}>
        <div className={styles.imageContainer}>
          <img 
            src={post.imageUrl} 
            alt={post.caption}
            style={filterStyle}
            className={styles.image}
          />
        </div>
        <div className={styles.postContent}>
          <h3 className={styles.author}>{post.author}</h3>
          <p className={styles.caption}>{post.caption}</p>
          <div className={styles.postMeta}>
            <span>{post.likes} likes</span>
            <span>{new Date(post.timestamp).toLocaleDateString()}</span>
          </div>
        </div>
      </article>
    );
  };

  return (
    <section className={styles.feed}>
      {mockPosts.map(renderPost)}
    </section>
  );
};

export default PhotoFeed; 