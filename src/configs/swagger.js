exports.options = {
  routePrefix: '/documentation',
  exposeRoute: true,
  swagger: {
    'info': {
      title: 'fastify-car-example',
      description: 'Peiro Russ Example',
      version: '1.0.0',
    },
    'externalDocs': {
      url: 'https://swagger.io',
      description: 'Find more info here',
    },
    'host': 'localhost:3000',
    'schemes': ['http'],
    'consumes': ['application/json'],
    'produces': ['application/json'],
    'tags': [
      {
        name: 'cars',
        description: 'Menage your cars',
      },
    ],
    'securityDefinitions': {
      'apiKey': {
        'type': 'apiKey',
        'name': 'apiKey',
        'in': 'header',
        'description': 'Roles required: Admin, Specialist',
      },
    },
  },
};
