
const DynamoDBResources = {
    UpdatesTable: {
        Type: 'AWS::DynamoDB::Table',
        Properties: {
            BillingMode: 'PAY_PER_REQUEST',
            KeySchema: [
                {
                    AttributeName: 'updateID',
                    KeyType: 'HASH'
                },
            ],
            AttributeDefinitions: [
                {
                    AttributeName: 'updateID',
                    AttributeType: 'S'
                },
                {
                    AttributeName: 'plantID',
                    AttributeType: 'S'
                },
                {
                    AttributeName: 'postID',
                    AttributeType: 'S'
                },
            ],
            GlobalSecondaryIndexes: [ 
                {
                    IndexName: 'byPlant',
                    KeySchema: [
                        {
                            AttributeName: 'plantID',
                            KeyType: 'HASH'
                        },
                        {
                            AttributeName: 'updateID',
                            KeyType: 'RANGE'
                        },
                    ],
                    Projection: {
                        ProjectionType: 'ALL'
                    },
                },
                {
                    IndexName: 'byPost',
                    KeySchema: [
                        {
                            AttributeName: 'postID',
                            KeyType: 'HASH'
                        },
                        {
                            AttributeName: 'updateID',
                            KeyType: 'RANGE'
                        },
                    ],
                    Projection: {
                        ProjectionType: 'ALL'
                    },
                },
            ],
        },
    },

    PlantPostRelationshipTable: {
        Type: 'AWS::DynamoDB::Table',
        Properties: {
            BillingMode: 'PAY_PER_REQUEST',
            KeySchema: [
                {
                    AttributeName: 'plantID',
                    KeyType: 'HASH'
                },
            ],
            AttributeDefinitions: [
                {
                    AttributeName: 'plantID',
                    AttributeType: 'S'
                },
                {
                    AttributeName: 'postID',
                    AttributeType: 'S'
                }
            ],
            GlobalSecondaryIndexes: [
                {
                    IndexName: 'byPost',
                    KeySchema: [
                        {
                            AttributeName: 'postID',
                            KeyType: 'HASH'
                        },
                    ],
                    Projection: {
                        ProjectionType: 'ALL'
                    },
                }
            ],
        },
    },

    PlantsTable: {
        Type: 'AWS::DynamoDB::Table',
        Properties: {
            BillingMode: 'PAY_PER_REQUEST',
            KeySchema: [
                {
                    AttributeName: 'plantID',
                    KeyType: 'HASH'
                },
            ],
            AttributeDefinitions: [
                {
                    AttributeName: 'plantID',
                    AttributeType: 'S'
                },
            ],
            GlobalSecondaryIndexes: [ ],
        },
    },

    PostsTable: {
        Type: 'AWS::DynamoDB::Table',
        Properties: {
            BillingMode: 'PAY_PER_REQUEST',
            KeySchema: [
                {
                    AttributeName: 'postID',
                    KeyType: 'HASH'
                },
            ],
            AttributeDefinitions: [
                {
                    AttributeName: 'postID',
                    AttributeType: 'S'
                },
            ],
            GlobalSecondaryIndexes: [ ],
        },
    },

};

export default DynamoDBResources;
