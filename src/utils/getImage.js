import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';

const DefaultImage = styled.img``;

export default function getImageReactDom(
  image,
  ImageComponent = DefaultImage,
  properties = {}
) {
  if (!image || !image.url) return null;

  return (image.localFile && image.localFile.extension === 'svg') ||
    image.url.includes('.svg') ||
    !image.localFile ? (
    <ImageComponent
      src={image.url}
      alt={image.alt}
      {...properties}
      style={{ objectFit: 'cover' }}
    />
  ) : (
    <ImageComponent
      as={GatsbyImage}
      image={getImage(image.localFile)}
      alt={image.alt || ''}
      {...properties}
    />
  );
}
