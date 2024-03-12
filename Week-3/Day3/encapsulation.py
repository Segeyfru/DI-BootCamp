class AtmAccount:
    
    availible_number = 500
    
    
    def __init__(self, holder, balance = 100) -> object:
        self._balance = balance  # _attributeName = protected attribute
        self.__holder = holder  # __attributeName = private attribute
        self.__account_number = AtmAccount.availible_number
        AtmAccount.availible_number +=1
        
    @property
    def balanse(self):
        return self._balance

    @property
    def funds(self):
        return self._balance
    
    @funds.setter
    def _funds(self, amount):
        self._balance = amount
    
    @property
    def get_holder(self):
        return self.__holder
    
    def deposit(self, amount) -> None:
        self._balance += amount
        # return self.balanse
            
    def withdraw(self, amount):
        self._balance -= amount
        # return self.balance
        
    # Dunder Methods

    def __str__(self):
        output = f"""
        Account Number: {self.__account_number}
        Holder: {self.__holder}
        Balance: {self.funds}
        """
        return output
        
    def __repr__(self) -> str:
        return str(self.__dict__)

    def __iadd__(self, amount):
        self.deposit(amount)
        return self

    def __isub__(self, amount):
        self.withdraw(amount)
        return self
    
    
if __name__ == '__main__':
    
    account1 = AtmAccount('John Doe')
    account2 = AtmAccount('Tack Doe')
# print(account1)
    account1 += 500
    account1 -= 250
    # account1.deposit(200)
    
    
print(account1)