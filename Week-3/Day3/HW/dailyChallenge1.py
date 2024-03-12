import math

class Circle:
    def __init__(self, radius):
        self.radius = radius
        self.diameter = radius * 2
        
    def area_of_circle(self):
        r = self.radius
        self.area = math.pi * r **2
        return self.area
    
    def add_circle(self, *circles):
        list_of_circles = [{self.radius, repr(self)}]
        for circle in circles:
            list_of_circles.append({circle.radius, repr(circle)})
        list_of_circles.sort
        return list_of_circles
        
        
        
    # def add_circle(self, *circles):
        # list_of_circles.append((self.radius, repr(self)))
        # # for circle in circles:
        # #     list_of_circles.append(circle.radius, repr(self))
        # list_of_circles.sort()
        # return list_of_circles
    
    #Dunder Methods

    def __str__(self):
        # self.area = area_of_circle()
        
        # output = f"Radius: {self.radius}, Diameter: {self.diameter}"
        output = f"""
            Radius: {self.radius}
            Diameter: {self.diameter}
            """
        return output
    
    def __repr__(self):
        output = f"Radius: {self.radius}, Diameter: {self.diameter}"
        return str(output)
    
    def __add__(self, other):
        if isinstance(other, Circle):
            new_radius = self.radius + other.radius
        else:
            new_radius = self.radius + other

        return Circle(new_radius)
    
    def __gt__(self, other):
        boolean = False
        if isinstance(other, Circle):
            if self.radius > other.radius:
                boolean = True
                return boolean
            elif self.radius < other.radius:
                boolean = False
                return boolean
            else:
                print("The circles are the same")
                return
        else:
            print('Something is not good')
            return
        
    

# list_of_circles = []
circle1 = Circle(5)
circle2 = Circle(3)
circle3 = Circle(2)
new = circle1 + circle2
new2 = circle3 + circle2

# str(circle1)
# print(circle1)
# print(new)
# print(new2)

# print(circle1 > circle2)

list = circle1.add_circle(new, new2)

# print(f"LIST WILL BE HEARE {list}")
print(list)
