


const AppSyncResources = {
    name: 'keylargogarden',
    schema: 'schema.api.graphql',
    authenticationType: 'AMAZON_COGNITO_USER_POOLS', 
    userPoolConfig: {
        awsRegion: 'us-east-1',
        defaultAction: 'ALLOW',
        userPoolId: { Ref: 'CognitoUserPool'},
    },
    mappingTemplatesLocation: 'serverless/mappingTemplates',
    mappingTemplates: [
        
        ///Queries

            ///Updates
        {
            type: 'Query',
            field: 'getUpdate',
            dataSource: 'updatesTable'
        },
        {
            type: 'Query',
            field: 'getUpdates',
            dataSource: 'updatesTable'
        },

            ///Plants
        {
            type: 'Query',
            field: 'getPlant',
            dataSource: 'plantsTable'
        },
        {
            type: 'Query',
            field: 'getPlants',
            dataSource: 'plantsTable'
        },
        {
            type: 'Query',
            field: 'getPlantsByPost',
            dataSource: 'plantsTable'
        },

            ///Posts
        {
            type: 'Query',
            field: 'getPost',
            dataSource: 'postsTable'
        },
        {
            type: 'Query',
            field: 'getPosts',
            dataSource: 'postsTable'
        },
        {
            type: 'Query',
            field: 'getPostsByPlant',
            dataSource: 'postsTable'
        },

        /// Many to Many


            /// Get Plants from Post
        // {
        //     type: 'Query',
        //     field: 'getPlants',
        //     dataSource: 'postsTable'
        // },
        // {
        //     type: 'Query',
        //     field: 'getPostsByPlant',
        //     dataSource: 'postsTable'
        // },
        {
            type: 'Post', 
            field: 'linkedPlants',
            kind: 'PIPELINE',
            functions: ['getPlants','hydratePlants'],
            request: 'simplePipeline.request.vtl',
            response: 'simplePipeline.response.vtl',
        },
        {
            type: 'Plant', 
            field: 'linkedIn',
            kind: 'PIPELINE',
            functions: ['getPosts','hydratePosts'],
            request: 'simplePipeline.request.vtl',
            response: 'simplePipeline.response.vtl',
        },
        
    ],

    functionConfigurations: [
        {
            name: 'getPlants',
            dataSource: 'plantPostRelationshipTable',
        },
        {
            name: 'hydratePlants',
            dataSource: 'plantsTable',
        },
        {
            name: 'getPosts',
            dataSource: 'plantPostRelationshipTable',
        },
        {
            name: 'hydratePosts',
            dataSource: 'postsTable',
        },

    ],



    dataSources: [
        {
            type: 'NONE',
            name: 'none',
        },
        {
            type: 'AMAZON_DYNAMODB',
            name: 'updatesTable',
            config: {
                tableName: { Ref: 'UpdatesTable' },
            },
        },
        {
            type: 'AMAZON_DYNAMODB',
            name: 'plantPostRelationshipTable',
            config: {
                tableName: { Ref: 'PlantPostRelationshipTable' },
            },
        },
        {
            type: 'AMAZON_DYNAMODB',
            name: 'plantsTable',
            config: {
                tableName: { Ref: 'PlantsTable' },
            },
        },
        {
            type: 'AMAZON_DYNAMODB',
            name: 'postsTable',
            config: {
                tableName: { Ref: 'PostsTable' },
            },
        },
    ],

    substitutions: {
        PostsTable: { Ref: 'PostsTable' }, 
        PlantsTable: { Ref: 'PlantsTable' },
    },

};


export default AppSyncResources;
