import type { FC, ChangeEvent } from 'react';
import { useState } from 'react';
import { availableFilters } from '../store/mockData';
import styles from './PostComposer.module.css';

const PostComposer: FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [caption, setCaption] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('none');

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    // This would typically send the data to a server
    console.log({
      image: selectedImage,
      caption,
      filter: selectedFilter
    });
    
    // Reset form
    setSelectedImage(null);
    setCaption('');
    setSelectedFilter('none');
  };

  return (
    <div className={styles.composer}>
      <h2>Create New Post</h2>
      
      <div className={styles.uploadSection}>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className={styles.fileInput}
        />
        
        {selectedImage && (
          <div className={styles.preview}>
            <img
              src={selectedImage}
              alt="Preview"
              style={{ filter: `${selectedFilter}(100%)` }}
            />
          </div>
        )}
      </div>

      <div className={styles.filters}>
        <h3>Filters</h3>
        <select
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
          className={styles.filterSelect}
        >
          {availableFilters.map(filter => (
            <option key={filter} value={filter}>
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <textarea
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        placeholder="Write a caption..."
        className={styles.caption}
      />

      <button
        onClick={handleSubmit}
        disabled={!selectedImage}
        className={styles.submitButton}
      >
        Share Post
      </button>
    </div>
  );
};

export default PostComposer; 