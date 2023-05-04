select bricks in admin_full_brick app_full_brick admin_interface_brick app_interface_brick add_end_point_brick
do
read -p "new feature name: " feature
(cd mason/ez_mason && mason make $bricks --name $feature -o ../../ --on-conflict append)
if [ $bricks == "app_interface_brick" ]
then
  param_case=`python scripts/string_manipulation.py $1 4`
  sed -i "/module.exports/ s/^/router.use(\"\/app\/$param_case\", require(\"..\/..\/interfaces\/routes\/$param_case\/$param_case-route\"));\n\n/;/^$/d" lib/infrastructure/app/app-router.js
fi
break
done