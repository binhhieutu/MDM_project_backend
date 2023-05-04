import wordninja
import sys

#Input
string = sys.argv[1]

#Split string into words
words = wordninja.split(string)

# Logic for snake_case
for i in range(len(words)):
    words[i] = words[i].lower()

snake_case = "_".join(words)
param_case = "-".join(words)
# Logic for camel_case
for i in range(1, len(words)):
    words[i] = words[i].capitalize()

camel_case = "".join(words)

# Logic for pascal_case
for i in range(len(words)):
    words[i] = words[i].capitalize()

pascal_case = "".join(words)

if(sys.argv[2]=="1"):
    sys.stdout.write(snake_case)
elif(sys.argv[2]=="2"):
    sys.stdout.write(camel_case)
elif(sys.argv[2]=="3"):
    sys.stdout.write(pascal_case)
elif(sys.argv[2]=="4"):
    sys.stdout.write(param_case)
else:
    print("Wrong argument!")

sys.exit(0)