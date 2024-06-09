'use client';  // This marks the file as a Client Component

import React, { useState } from 'react';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import styles from './Review.module.css';

const Review = () => {
  const [safetyRating, setSafetyRating] = useState(0);
  const [communicationRating, setCommunicationRating] = useState(0);
  const [recommend, setRecommend] = useState(null);
  const [praise, setPraise] = useState('');

  const handleStarClick = (setRating, rating) => {
    setRating(rating);
  };

  return (
    <>
      <Head>
        <title>Leave a Review</title>
      </Head>
      <div className={styles.container}>
        <button className={styles.closeButton}>&times;</button>
        <h1 className={styles.heading}>Leave a review</h1>

        <div className={styles.section}>
          <h2 className={styles.sectionHeading}>Safety</h2>
          <p className={styles.description}>Rate the safety measures in place.</p>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`${styles.star} ${safetyRating >= star ? styles.filled : ''}`}
                onClick={() => handleStarClick(setSafetyRating, star)}
              >
                &#9733;
              </span>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionHeading}>Communication</h2>
          <p className={styles.description}>Rate the communication quality.</p>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`${styles.star} ${communicationRating >= star ? styles.filled : ''}`}
                onClick={() => handleStarClick(setCommunicationRating, star)}
              >
                &#9733;
              </span>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionHeading}>Would you recommend Trausti?</h2>
          <div className={styles.recommend}>
            <button
              className={recommend === 'yes' ? styles.selected : ''}
              onClick={() => setRecommend('yes')}
            >
              <FontAwesomeIcon icon={faThumbsUp} /> Yes
            </button>
            <button
              className={recommend === 'no' ? styles.selected : ''}
              onClick={() => setRecommend('no')}
            >
              <FontAwesomeIcon icon={faThumbsDown} /> No
            </button>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionHeading}>Praise</h2>
          <p className={styles.description}>Provide a short one-word summary.</p>
          <div className={styles.praise}>
            {['adventurous', 'genius', 'good learner'].map((option) => (
              <button
                key={option}
                className={praise === option ? styles.selected : ''}
                onClick={() => setPraise(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
