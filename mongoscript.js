var conn = new Mongo();
for (var ii=0;ii<users;ii++)
{
		conn.getDB("user_"+ii).addUser("user_"+ii,"user_"+ii);
//		db.addUser(username,password);
}
