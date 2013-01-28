mongo --eval "var users=50;" mongoscript.js
mkdir ../OpenPDS_Cluster
for i in {1..50}
do
		mkdir ../OpenPDS_Cluster/user_$i
		cp -r ../OpenPDS/ ../OpenPDS_Cluster/user_$i
		x=`expr $i + 10`
		forever start ../OpenPDS_Cluster/user_$i/OpenPDS/server.js 80$x user_$i &
done
