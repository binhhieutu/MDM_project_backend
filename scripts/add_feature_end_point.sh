read -p "clone feature name: " feature
snake_case=`python scripts/string_manipulation.py $feature 1`
camel_case=`python scripts/string_manipulation.py $feature 2`
pascal_case=`python scripts/string_manipulation.py $feature 3`
param_case=`python scripts/string_manipulation.py $feature 4`

read -p "clone endpoint name: " endpoint
endpoint_param_case=`python scripts/string_manipulation.py $endpoint 4`

select used_for in admin app
do
if [ $used_for == "app" ]
then
  feature_controller="$snake_case"
  feature_controller+="Controller"
  sed -i "/module.exports/ s/^/router.post(\n  \"\/$endpoint_param_case\\\",\n  route.handle(async (req) => await $feature_controller.$endpoint(req, global.gServiceLocator.repository))\n);\n\n/" lib/interfaces/routes/$param_case/$param_case-route.js
  sed -i "/module.exports/ s/^/async function $endpoint ({ body }, repository) {\n  \/\/ todo: handle function\n}\n\n/" lib/interfaces/controllers/$param_case/$param_case-controllers.js
  sed -i "s/module.exports = {/&\n  $endpoint,/" lib/interfaces/controllers/$param_case/$param_case-controllers.js
  break
elif [ $used_for == "admin" ]
then
  feature_controller="admin$pascal_case"
  feature_controller+="Controller"
  sed -i "/module.exports/ s/^/router.post(\n  \"\/$endpoint_param_case\\\",\n  route.handle(async (req) => await $feature_controller.$endpoint(req, global.gServiceLocator.repository))\n);\n\n/" lib/interfaces/routes/$param_case/admin-$param_case-route.js
  sed -i "/module.exports/ s/^/async function $endpoint ({ body }, repository) {\n  \/\/ todo: handle function\n}\n\n/" lib/interfaces/controllers/$param_case/admin-$param_case-controllers.js
  sed -i "s/module.exports = {/&\n  $endpoint,/" lib/interfaces/controllers/$param_case/admin-$param_case-controllers.js
  break
else
   echo "invalid select"
fi
break
done

