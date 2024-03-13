class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount
    
    def add(self, other):
        sum = self.amount + other.amount

    
    #Dunder Methods
    
    def __str__(self):
        output = f"{str(self.amount)}   {self.currency}" 
        return output
    
    def __int__(self):
        output = f"{self.amount}"
        print(output)
        return int(output)

    def __repr__(self):
        return str(self.currency) + ' ' + str(self.amount)
    
    
    def __add__(self, other):
        if isinstance(other, Currency):
            if self.currency == other.currency:
                sum = self.amount + other.amount
                print(sum)
                return sum
            else:
                # raise TypeError(f"Cannot add between Currency type {self.currency} and {other.currency}")
                print(f"Cannot add between Currency type {self.currency} and {other.currency}")
        else:
            sum = self.amount + other
            print(sum)
            return sum
        
        
    def __iadd__(self, other):
        if isinstance(other, Currency):
            if self.currency == other.currency:
                self.amount += other.amount
                return self
            else:
                print(f"Cannot add between Currency type {self.currency} and {other.currency}")
        else:
            self.amount += other
            return self    
    
    
c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)


# print(str(c1))
# int(c2)
# print(repr(c3))
# c2 + 5
# c1 + c3

# c3 += c4
# int(c3)


