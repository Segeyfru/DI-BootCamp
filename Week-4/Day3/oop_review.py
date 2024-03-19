#  OOP: class, objects, attributes, methods, etc

# the constructor __init__ and atributes
# dunder methods
# encapsulation
# decorators
# methods
# inheritance


class Emploee:
    def __init__(self, firstname, lastname, age, job, salary):
        self.first_name = firstname
        self.last_name = lastname
        self.age = age
        self.job = job
        self.salary = salary
        self.email = f'{firstname.lower()}_{lastname.lower()}@company.com'
    
    def get_full_name(self):
        return f'{self.first_name} {self.last_name}'   
    def get_promotion(self, add_salary):
        self.salary += add_salary
        
employee1 = Emploee('John','Doe',34,'Front-end Develomer', 30000)
employee2 = Emploee('Jane','Astin',40,'Data Analist', 30000)
