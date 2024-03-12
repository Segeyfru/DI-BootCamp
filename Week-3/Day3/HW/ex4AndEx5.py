# Exersise 4
from datetime import datetime
from datetime import date

def time():
    time = date.today()    
    print(f'Current time {time}')

time()

# Exersise 5
def to_january():
    time = datetime.today()
    jan_first = datetime(time.year + 1, 1, 1, 0, 0)
    till_jan = jan_first - time
    print(f'The 1st of January is in {till_jan}')

to_january()


# Exersise 6


# def from_birth(d, m, y):
#     cu