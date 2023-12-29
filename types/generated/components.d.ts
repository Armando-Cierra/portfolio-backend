import type { Schema, Attribute } from '@strapi/strapi';

export interface LinksProjects extends Schema.Component {
  collectionName: 'components_links_projects';
  info: {
    displayName: 'projects';
    icon: 'cursor';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    icon: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<['solid', 'outline']>;
  };
}

export interface RolesWorkExperience extends Schema.Component {
  collectionName: 'components_roles_work_experiences';
  info: {
    displayName: 'workExperience';
    icon: 'bulletList';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'links.projects': LinksProjects;
      'roles.work-experience': RolesWorkExperience;
    }
  }
}
