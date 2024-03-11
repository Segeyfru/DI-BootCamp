from ex2 import Dog

class PetDog(Dog):
    def __init__(self, name, age, weight, trained = False):
        super().__init__(name, age, weight)
        self.trained = trained
        
    def train(self):
        print(self.bark)
        trained = True
        
    def play(self, *args):
        # dog_names = [arg.name for arg in args]
        print(self.name, ',' , ','.join([arg.name for arg in args]) , ' all play together')
        # print(dog_names + ' all play together')


def case1():
    return "Вы выбрали опцию 1"

def case2():
    return "Вы выбрали опцию 2"

def case3():
    return "Вы выбрали опцию 3"

def case4():
    print(self.name + ' plays dead')



choice = int(input(


    def do_a_trick(self):
        if self.trained:
            def case1(self):
                return "Вы выбрали опцию 1"

            def case2(self):
                return "Вы выбрали опцию 2"

            def case3(self):
                return "Вы выбрали опцию 3"

            def case4(self):
                print(self.name + ' plays dead')
                
            switch_case = {
                1: case1,
                2: case2,
                3: case3,
                4: case4
                }
            choice = random.randint(1, 3)
            result = switch_case.get(choice, default)()
            print(result)
                   

dog01 = PetDog('Rex', 10 , 25)
dog02 = PetDog('Jack', 5 , 50)  
dog03 = PetDog('Tony', 7 , 40)  
dog43 = PetDog('Tog4', 7 , 40)  
dog53 = PetDog('To5y', 7 , 40)  



dog01.play(dog02, dog43, dog03, dog53)