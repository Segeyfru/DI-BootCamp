class Zoo:
    def __init__(self, zoo_name):
        self.zoo_name = zoo_name
        self.animals = []
    
    def add_animals(self, *new_animal):
        if new_animal not in self.animals:
            self.animals.extend(new_animal)
        print(self.animals)
    
    def sort_animals(self):
        '''sort the animals alphabeticlly and groups'''
        self.animals.sort()
        groups = {}
        for animal in self.animals:
            first_letter =animal[0]
            if first_letter not in groups:
                groups[first_letter] = [animal]
            else:
                groups[first_letter].append(animal)
        return groups
    def get_groups(self):
        groups = self.sort_animals()
        groups_dict = {i + 1 : groups[group] for i, group in enumerate(groups)}

ramat_gan_safari = Zoo('Safari Ramat Gan')
ramat_gan_safari.add_animals('turtle', 'Elephant', 'Emmy')
print(ramat_gan_safari.sort_animals())
