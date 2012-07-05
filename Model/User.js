require('./DbFactory.js')

User = function(name, email, password){
    this.name = name;
    this.email = email;
    this.password = password;
}

// Static methods
User.load = function(id, onload) {
    var db = DbFactory.getDb(["users"]);
    
    var users = db.users.findOne({_id:db.ObjectId(id)}, function(err, data){
        onload(data);
    });
    //db.
}

// Instance methods
User.prototype.save = function(options){
    
    var db = DbFactory.getDb(["users"]);
    
    db.users.save(this, function(err, saved){
	if(err || !saved) options.fail()
	else options.success();
    });
};