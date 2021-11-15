


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
        {
            type: 'Query',
            field: 'getUpdate',
            dataSource: 'updatesTable'
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

    ]
}


export default AppSyncResources;
