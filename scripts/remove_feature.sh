read -p "remove feature: " feature

snake_case=`python scripts/string_manipulation.py $feature 1`
camel_case=`python scripts/string_manipulation.py $feature 2`
pascal_case=`python scripts/string_manipulation.py $feature 3`
param_case=`python scripts/string_manipulation.py $feature 4`

echo "Remove directories"
find lib -iname "*${param_case}*" -type d 
echo "Remove files"
find lib -iname "*${param_case}*" -type f
#remove
find lib -iname "*${param_case}*" -type d -prune -exec rm -rf {} \;
find lib -iname "*${param_case}*" -type f -exec rm {} \;

sed -i "/$camel_case: \"$camel_case\",/d" lib/infrastructure/database/mongodb/collections.js
sed -E -i "/$camel_case,|const $camel_case = require\(\".\/${param_case}-schema\"\);/d" lib/infrastructure/database/mongodb/schemas/index.js
sed -E -i "/${camel_case}Repo: new ${pascal_case}Repo\(\),|const ${pascal_case}Repo = require\(\".\/$param_case\"\);/d" lib/infrastructure/repository/index.js
sed -i "/^router.use(\"\/app\/$param_case\", require(\"..\/..\/interfaces\/routes\/$param_case\/$param_case-route\"));/d" lib/infrastructure/app/app-router.js
sed -i "/^router.use(\"\/admin\/$param_case\", require(\"..\/..\/interfaces\/routes\/$param_case\/admin-$param_case-route\"));/d" lib/infrastructure/app/admin-router.js

#remove empty folder
# find lib -type d -depth -exec rmdir {} \;
find lib -empty -type d -delete
