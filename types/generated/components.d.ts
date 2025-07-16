import type { Schema, Struct } from '@strapi/strapi';

export interface SharedImageGallery extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_galleries';
  info: {
    displayName: 'ImageGallery';
  };
  attributes: {
    previews: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    thumbnails: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.image-gallery': SharedImageGallery;
    }
  }
}
