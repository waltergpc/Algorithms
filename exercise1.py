
def convert_string(num, arr = []):
    string_num = ''
    rem = num % 10
    num = num // 10
    print(rem)
    print(num)
    arr[:0] = [rem]
    
    if num > 0:
        convert_string(num, arr)
    else:
        for i in arr:
            string_num += str(i)
            
    print(type(string_num))
    return type(string_num)   



convert_string(123)


