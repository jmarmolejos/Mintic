DbFactory = function(){
    
}
DbFactory.getDb = function(collections){
    var databaseUrl = "testdb";
    //var collections = ["users"];
    
    var db = require("mongojs").connect(databaseUrl, collections);
    return db;
}