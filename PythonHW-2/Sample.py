
# function called max_num()

def max_num(n1, n2, n3):
    return max(n1,n2, n3)

n1 = 100
n2 = 200
n3 = 300

maximum_number = max_num(n1, n2, n3)
print(f"The maximum number among {n1}, {n2}, and {n3} is: {maximum_number}")


# function called mult_list()


def mult_list(lst):
    if len(lst) == 0:
        return 0
    
    prod = lst[0]

    if len(lst) > 1:
        for i in lst[1:]:
            prod = prod * i

    return prod

    

print(mult_list([2,4,6]))
print(mult_list([]))
print(mult_list([20]))


# function called rev_string() 

def rev_string(my_str):
    return my_str[::-1]


print(rev_string(""))
print(rev_string("yuuuhh"))

# function called num_within()


def num_within(number, start_range, end_range):
    return start_range <= number <= end_range

   
print(num_within(3, 2, 4))  
print(num_within(3, 1, 3))  
print(num_within(10, 2, 5)) 



#  function called pascal() 

triangle = [[1],[1,1]]
def pascal(n):
 
  if n < 1:
    print("invalid number of rows")
  elif n == 1:
    print(triangle[0])
  else:
    row_number = 2
   
    while len(triangle) < n:
      row = []
      row_prev = triangle[row_number - 1]

      length = len(row_prev)+1
      for i in range(length):
       
        if i == 0:
          row.append(1)
        
        elif i > 0 and i < length-1:
          row.append(triangle[row_number-1][i-1]+triangle[row_number-1][i])
       
        else:
          row.append(1)
      triangle.append(row)
      row_number += 1

   
    for row in triangle:
      print(row)

pascal(2)
pascal(5)