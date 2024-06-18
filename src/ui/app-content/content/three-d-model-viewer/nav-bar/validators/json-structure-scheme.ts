import { JSONSchemaType } from 'ajv';

import { Shape } from 'src/ui/app-content/content/three-d-model-viewer/nav-bar/validators/json-structure-validator.types';

export const jsonShapesDataStructureScheme: JSONSchemaType<Shape[]> = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      shapeName: { type: 'string' },
      data: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            time: { type: 'number' },
            value: { type: 'number' },
          },
          required: ['time', 'value'],
        },
      },
    },
    required: ['shapeName', 'data'],
  },
};
