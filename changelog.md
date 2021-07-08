
CHANGE LOG

[ 2.1.2] -- Map Update v3
|> change map style from light-v11 to roadtrippers
|> encoding token to unreadable by human
|> re-create variable and function in map.js, custom.js
|> migrating service.js to firebase firestore database using personal account (sofa.haeta@gmail.com)
|> create CHANGE LOG file to save any list of change in this project
|> change version on package.json to 1.1.1

[ 2.1.1 ] -- Map Update v2
|> create function to read parameter in url
|> create a filter to all coordinates stored in the database

[ 2.1.0 ] -- Map Update v1
|> create a map and it's necessary

[ 1.0.1 ] -- Interface Update v1
|> create interface folder to store any prototype file(s)
|> create homepage prototype inside interface folder
NOTE : any files inside interface folder will be migrated to frontend folder 

[ 1.0.0 ] -- Initial Released
NOTE : version and description can be modified according to our (developers) wishes
              for example today the version of Map Update v3 is 2.1.2, tomorrow it may change
              to 2.2.x because 2.1.x is used for homepage updates

              version structure :
                 ┌--> Mayor
                 |   ┌--> Minor
              [ X.Y.Z ] -- P
                           |          └--> patch /build/headline
                           └--> Micro

              X = increased if mayor update
              Y = increased if minor update
              Z = increased if micro update
              P = increased if patch /build/headline update