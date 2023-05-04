read -p "clone feature name: " feature
read -p "clone feature path: " path

correct_path=`echo $path | sed -e "s/'//g"`

find lib -iname "*${feature}*" -type d -exec mkdir -p "$correct_path/$feature/{}" \;
find $correct_path/$feature/lib -iname "*${feature}*" -type d -prune -exec rm -rf {} \;
find lib -iname "*${feature}*" -type d  -exec scp -r {}  $correct_path/$feature/{} \;
find lib -iname "*${feature}*" -type f -exec rsync -R {}  $correct_path/$feature \;

