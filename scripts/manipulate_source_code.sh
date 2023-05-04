snake_case=`python scripts/string_manipulation.py $1 1`
camel_case=`python scripts/string_manipulation.py $1 2`
pascal_case=`python scripts/string_manipulation.py $1 3`
param_case=`python scripts/string_manipulation.py $1 4`


sed -i "s/module.exports = {/&\n  $camel_case: \"$camel_case\",/" lib/infrastructure/database/mongodb/collections.js
sed -i "/module.exports/ s/^/const $camel_case = require(\".\/${param_case}-schema\");\n\n/;/^$/d" lib/infrastructure/database/mongodb/schemas/index.js
sed -i "s/module.exports = {/&\n  $camel_case,/" lib/infrastructure/database/mongodb/schemas/index.js
sed -i "/module.exports/ s/^/const ${pascal_case}Repo = require(\".\/$param_case\");\n\n/;/^$/d" lib/infrastructure/repository/index.js
sed -i "s/module.exports = {/&\n  ${camel_case}Repo: new ${pascal_case}Repo(),/" lib/infrastructure/repository/index.js
if [ $2 == "admin" ]
then
   sed -i "/module.exports/ s/^/router.use(\"\/admin\/$param_case\", require(\"..\/..\/interfaces\/routes\/$param_case\/admin-$param_case-route\"));\n\n/;/^$/d" lib/infrastructure/app/admin-router.js
else
   sed -i "/module.exports/ s/^/router.use(\"\/app\/$param_case\", require(\"..\/..\/interfaces\/routes\/$param_case\/$param_case-route\"));\n\n/;/^$/d" lib/infrastructure/app/app-router.js
fi

