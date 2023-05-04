read -p "new feature name: " feature

select user in admin app
do
  case $user in
  "admin"|"app")

  brick="_full_brick"
  (cd mason/ez_mason && mason make "$user$brick" --name $feature -o ../../ --on-conflict append)

  sh scripts/manipulate_source_code.sh $feature $user

  #open schema to edit
  param_case=`python scripts/string_manipulation.py $feature 4`
  code -r lib/infrastructure/database/mongodb/schemas/$feature-schema.js
  break
  ;;

  # Matching with invalid data
  *)
  echo "Invalid entry."
  break
  ;;
esac
done

