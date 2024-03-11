class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamens(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
# cat1 = Bengal('Beny', 7)
# cat2 = Chartreux('Charly', 3)
# cat3 = Siamens('Sima', 5)

# all_cats = [cat1, cat2, cat3]
all_cats = [Bengal('Beny', 7), Chartreux('Charly', 3), Siamens('Sima', 5)]

sara_pets = Pets(all_cats)

sara_pets.walk()

# print(sara_pets)

# for cat in all_cats

# print(sara_pets.animals)
# sara_pets.animals.


# print([cat.walk() for cat in all_cats])

