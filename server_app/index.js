const { ApolloServer, gql } = require('apollo-server');

// Data
const students = [
    {
        "id": 1,
        "name": "Azhar",
        "email": "azhar@gmail.com",
        "age": 24
    },
    {
        "id": 2,
        "name": "Ishaq",
        "email": "ishaq@gmail.com",
        "age": 21
    },
    {
        "id": 3,
        "name": "Ramzan",
        "email": "ramzan@gmail.com",
        "age": 23
    }
]

// Resolver
const resolvers = {
    Query: {
        students: () => students,
    },
};

// Schema
const typeDefs = gql`

type Students {
    id: Int
    name: String
    email: String
    age: Int
}

type Query {
    students: [Students]
}
`;
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});