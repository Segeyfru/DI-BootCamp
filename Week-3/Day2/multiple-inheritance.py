class Alien:
    def __init__(self, name, planet):
        self.name = name
        self.planet = planet

    def fly(self):
        print(self.name, 'is flying!')

    def sleep(self):
        print("Aliens don't sleep")

class Animal:
    def __init__(self, name):
        self.name = name

    def sleep(self):
        print("zzzZZZZZ")

class Dog(Animal):
    def sleep(self):
        print("zz000000ZZZ")
        
    def bark(self):
        print("{} barked, WAF !".format(self.name))

class AlienDog( Alien, Dog):
    def bark(self):
        print("{} barked, 0ul10ul0u (that's how aliens dogs bark..) !".format(self.name))


alient_dog = AlienDog('Rex', 'Jupiter')
# print(alient_dog.planet)
alient_dog.sleep()