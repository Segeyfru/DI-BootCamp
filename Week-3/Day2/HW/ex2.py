class Dog():
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight
    
    def bark(self):
        print(self.name + ' is barking')
        
    def run_speed(self):
        speed =  self.weight / self.age * 10
        return speed
    
    def fight(self, other_dog):
        first_strength = int(self.run_speed()) * self.weight
        second_stength = int(other_dog.run_speed()) * other_dog.weight
        print(first_strength)
        print(second_stength)
        if(first_strength > second_stength):
            name_of_winer = self.name
            print(name_of_winer + ' will win a fight')
        elif(first_strength < second_stength):
            name_of_winer = other_dog.name
            print(name_of_winer + ' will win a fight')
        else:
            print("No one will win")
            
        
dog1 = Dog('Rex', 10 , 25)  
dog2 = Dog('Jack', 5 , 50)  
dog3 = Dog('Tony', 7 , 40)  

dog2.bark()
print(dog1.run_speed())
print(dog2.run_speed())
dog2.fight(dog3)

     