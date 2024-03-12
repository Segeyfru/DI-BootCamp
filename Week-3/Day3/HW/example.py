from random import choice, randint
class Dog:

    def __init__(self, name, age, weight, breed, gender):
        self.name = name
        self.age = age
        self.weight = weight
        self.breed = breed
        self.gender = gender

    def __str__(self):
        return "I'm a DOG called " + self.name

    def __repr__(self):
        return f"Dog: name = {self.name}"

    def __len__(self):
        if breed == "dachshund":
            return self.weight * 5
        else:
            return self.weight * 3

    def __gt__(self, other):
        return "All dogs are created equal"

    def __ge__(self, other):
        return self.age >= other.age

    def __add__(self, other):
        if self.gender == other.gender:
            return None
        if self.breed != other.breed:
            breed = self.breed + "-" + other.breed
        else:
            breed = self.breed
        age = 0
        weight = (self.weight + other.weight)/20
        return [Dog(f"Puppy {i+1}", age, weight, breed, choice(["M", "F"])) for i in range(randint(1, 6))]

    def __mul__(self, other):
        return self.__add__(other)
    
dog1 = Dog('rex',20,50,"poodel",'M')
dog2 = Dog('rexa',20,50,"poodel",'F')

dogs = [dog1, dog2]
new = dog1 + dog2
print(new)