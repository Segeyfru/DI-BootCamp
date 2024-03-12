#Decorators

#Sytax:  How to apply the decorator

# @nameOfFunction
# def do_this():
#     pass


import time

def tictoc(func):
    def wrapper():
        t1 = time.time()
        func()
        total = time.time() - t1
        print(f'{func.__name__} took {total} seconds')
        #code to calculate the execution time

    
    return wrapper

@tictoc
def do_this():
    
    #code to the function
    time.sleep(2)
    
@tictoc
def do_that():
    time.sleep(1.5)

@tictoc
def do_something():
    time.sleep(0.5)


do_this()
do_that()
do_something()

print('Finished')
