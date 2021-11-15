
const CognitoUnauthResources = {
  CognitoIdentityPool: {
    Type: 'AWS::Cognito::IdentityPool',
    Properties: {
      IdentityPoolName: 'Key Largo Garden Pool Unauth',
      AllowUnauthenticatedIdentities: true,
    },
  },

  CognitoIdentityPoolRoles: {
    Type: 'AWS::Cognito::IdentityPoolRoleAttachment',
    Properties: {
      IdentityPoolId: {
        Ref: 'CognitoIdentityPool',
      },
      Roles: {
        unauthenticated: {
          GetAttn: 'CognitoIdentityPoolRolesRole',
        },
      },
    },
  },


  CognitoUnAuthRole: {
    Type: 'AWS::IAM::Role',
    Properties: {
      Path: '/',
      AssumeRolePolicyDocument: {
        Version: '2012-10-17',
        Statement: [
          {
            Effect: 'Allow',
            Principal: {
              Federated: 'cognito-identity.amazonaws.com',
            },
            Action: 'sts:AssumeRoleWithWebIdentity',
            Condition: {
              StringEquals: {
                'cognito-identity.amazonaws.com:aud': {
                  Ref: 'CognitoIdentityPool',
                },
              },
              'ForAnyValue:StringLike': {
                'cognito-identity.amazonaws.com:amr': 'unauthenticated',
              },
            },
          },
        ],
      },
      Policies: [
        {
          PolicyName: 'CognitoUnAuthRolePolicy',
          PolicyDocument: {
            Version: '2012-10-17',
            Statement: [
              {
                Effect: 'Allow',
                Action: [
                  'mobileanalytics:PutEvents',
                  'cognito-sync:*',
                  'cognito-identity:*',
                  'appsync:GraphQL',
                ],
                Resource: '*',
              },
            ],
          },
        },
      ],
    },
  },
};

export default CognitoUnauthResources;