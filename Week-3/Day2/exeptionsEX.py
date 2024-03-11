

# VALID_MOVES = [i for i in range(1,10)]

# while True:
#     try:
#      move = int(input('input your move '))
#      if move not in VALID_MOVES:
#          raise ValueError()
#      break
#     except ValueError as e:
#         print(e)
        
#         continue         

# print(move)
        
        
        
list = [1,2,3,4,'six',5,9,'ten',8]
sum = 0
for num in list:
    sum += num
    # try:
    #     sum += num
        
    # except:
    #     print('error')
print(sum)        
        
# print('end of work'+ sum)