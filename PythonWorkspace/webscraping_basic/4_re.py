import re
p = re.compile("ca.e") 
# . : 하나의 문자를 의미 > care, cafe, case
# ^ : 문자열의 시작 > desk, destination 

# m = p.match("case")
# # print(m.group())
# if m:
#     print(m.group())
# else:
#     print("매칭되지 않음")

def print_match(m):
    if m:
        print("m.group() : ", m.group())
        print("m.string : " , m.string)
        print("m.start() : ", m.start())
        print("m.end() : ", m.end())
        print("m.span() : ", m.span())
    else:
        print("매치되지 않음")

# m = p.match("careless")
# print_match(m)

# m = p.search("careless")
# print_match(m)

