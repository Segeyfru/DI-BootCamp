class Parent:
    def speak(self):
        print('Parent speaking')

class Child(Parent):
    def speak(self):
        print('Child is speaking load')
        
class Grandchild(Child):
    pass
    
# person = Parent()
# person.speak()
# person2 = Child()
# person2.speak()
# person3 = Grandchild()
# person3.speak()

class Animal:
    def __init__(self, name, family, legs) -> None:
        self.name = name
        self.family = family
        self.legs = legs

    def make_sounds(self):
        print(f'{self.name} is making a sound')

class Dog(Animal):
    def __init__(self, name, family = 'Canidae', legs = 4, trained = False ):
        super().__init__(name, family, legs)
        # Animal.__init__(name, family, legs)
        self.trained = trained
        
class Poodle(Dog):
    
    def __init__(self, name, legs, trained, cuteness, family = 'Canidae'):
        super().__init__(name, family, legs, trained)
        self.cuteness = cuteness
    
    
animal1 = Animal('Toto', 'Canidae', 4)
animal1.make_sounds()

dog = Dog('Rex','Canidae', 4)
dog.make_sounds()

cute_dog = Poodle('flufy', )