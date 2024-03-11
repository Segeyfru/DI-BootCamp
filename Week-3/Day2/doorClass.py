class Door:
    def __init__(self, is_opened = False) -> None:
        self.is_opened = is_opened
    def open_door(self):
        if (self.is_opened == True):
            print("Door is already open")
        else: 
            self.is_opened = True
            print('Door was opened')
       
    def close_door(self):
       if (self.is_opened == False):
            print("Door is already close")
       else:
            self.is_opened = False
            print('Door was closed')
        
    
class BlockedDoor(Door):
    def open_door(self):
        
        raise Exception('Cannot Open a Blocked Door')
    
    
def close_door(self):
        raise Exception('Cannot Open a Blocked Door')
        
door1 = Door(False)
door1.close_door()
door1.open_door()