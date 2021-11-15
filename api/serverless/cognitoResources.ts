
const CognitoResources = {
    CognitoUserPool: {
        Type: 'AWS::Cognito::UserPool',
        Properties: {
            AutoVerifiedAttributes: [ 'email' ],
            Policies: {
                PasswordPolicy: {
                    MinimumLength: 8,
                    RequireLowercase: false,
                    RequireNumbers: false,
                    RequireSymbols: false,
                    RequireUppercase: false,
                },  
            },
            UsernameAttributes: [ 'email' ],
            Schema: [
                {
                    AttributeDataType: 'String',
                    Name: 'name',
                    Required: false,
                    Mutable: true,
                },
            ],
        },
    },

    WebUserPoolClient: {
        Type: 'AWS::Cognito::UserPoolClient',
        Properties: {
            UserPoolId: { Ref: 'CognitoUserPool' },
            ClientName: 'web',
            ExplicitAuthFlows: [
                'ALLOW_USER_SRP_AUTH',
                'ALLOW_USER_PASSWORD_AUTH',
                'ALLOW_REFRESH_TOKEN_AUTH',
            ],
            PreventUserExistenceErrors: 'ENABLED',
        },
    },
};

export default CognitoResources;
