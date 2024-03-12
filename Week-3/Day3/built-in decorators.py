# Bilt-in Decorators


#   @staticmethod

# class MyClass:
    
#     @staticmethod
#     def add(a,b):
#         return a + b




#    @classmethod

class MyClass:
    counter = 0
    @classmethod
    def add(cls, a):
        cls.counter += a
        return cls.counter
    

MyClass().add(5)
print(MyClass.counter)


class Circle:
    def __init__(self, radius, diameter) ->None:
        self.radius = radius
        self.diametre = diameter
        
        
    @classmethod
    def from_radius(cls, radius):
        return cls(radius = radius, diameter = radius * 2)

    @classmethod
    def from_diameter(cls, diameter):
        return cls(radius = diameter /2, diameter = diameter)
    
    circle1 = Circle.from_radius(5)
    print(circle1.diametre)
    
