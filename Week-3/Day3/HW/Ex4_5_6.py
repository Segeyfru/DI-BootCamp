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


def from_birth(d, m, y):
    date_of_Birth = datetime(y,m,d)
    print(date_of_Birth)
    curr_time = datetime.today()
    print(curr_time)
    from_birth = (curr_time - date_of_Birth)
    return from_birth.days *24 *60
    
print(f'It`s been {from_birth(26,8,1996)} min since you were born')