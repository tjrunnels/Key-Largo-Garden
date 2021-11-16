

### Having GraphQL problems from Sam's example repo:
the problems were:

- ERROR: RequestItem keys '$[tables][api-dev-PlantsTable-N5M8O7HO3M0C]' can't be empty
     - turns out we had to change context.arguments.plantID --->> context.source.plantID
           - i found this out by looking at the cloudwatch logs


- the index on getPlants needs to be byPost since it's not querying on the default primary key!!!!!!!

- TYPEMISMATCH:   i was returning a JSON object at the end of 'hydratePosts' (which included a "posts": list) when it was expecting just a list.  So i commented out the json and just grabbed the list part

