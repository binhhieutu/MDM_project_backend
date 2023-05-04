read -p "feature name: " feature
read -p "clone feature path: " from
read -p "destination path: " to
correct_from_path=`echo $from | sed -e "s/'//g"`
correct_to_path=`echo $to | sed -e "s/'//g"`
cp -R  $correct_from_path $correct_to_path

sh scripts/manipulate_source_code.sh $feature