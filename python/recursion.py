# Recursion Problems:

def power(base, exponent):
	if (exponent == 0):
		return 1
	return base * power(base, exponent - 1)

def factorial(num):
	if (num == 1):
		return 1
	return num * factorial(num - 1)

def productOfArray(arr):
	if (len(arr) == 1):
		return arr[0]
	last = arr.pop()
	return last * productOfArray(arr)

def recursiveRange(num):
	if (num == 1):
		return 1
	return num + recursiveRange(num - 1)

def fib(num):
	if (num <= 2):
		return 1
	return fib(num - 1) + fib(num - 2)