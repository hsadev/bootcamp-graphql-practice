// Import Objection Models Here!

const welcome = async () => 'GraphQL Exercises!'


// This resolver object mirrors the shape of your TypeDefs
const resolver = {
  Query: { welcome },

}

module.exports = resolver
