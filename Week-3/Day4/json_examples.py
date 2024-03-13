import json
import os

dir_path = os.path.dirname(os.path.realpath(__file__))


my_family = {
    "parents":['Beth', 'Jerry'],
    "children":['Summer', 'Morty']
}

json_file = 'family.json'

#create a json file adding on it a python dictinary
with open (dir_path + '\\family.json', 'w') as f_obj:
    # json.dump(my_family, f_obj)
    
# convert dict to a json string
    json_str = json.dumps(my_family)
    print(json_str)

#print dict nicely
    json.dump(my_family, f_obj, indent=2, sort_keys=True)
    
    
#