import json
import os

dir_path = os.path.dirname(os.path.realpath(__file__))

print(dir_path)

sampleJson = '''{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}'''


comp_data = json.loads(sampleJson)

comp_data['company']['employee']['payable']['salary'] = 5874451
comp_data["company"]['employee']['birth_day'] = '02.02.1688'
print(comp_data['company']['employee']['payable']['salary'])
print(comp_data)

with open (dir_path + '\easyJson.json', 'w') as file_obj:
    json.dump(comp_data, file_obj, indent=2)