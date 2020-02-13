str = 'i like to bork and bark but bork with fork is nice as bark as bork'

def splitString(str):
    return [char for char in str]

def stringSearch(str, pattern):
    matches = 0
    strList = splitString(str)
    patternList = splitString(pattern)
    for idx, strChar in enumerate(strList):
        isMatch = False
        if (strChar == patternList[0]):
            for num, patternChar in enumerate(patternList):
                if (patternChar == strList[idx + num]):
                    isMatch = True
                else:
                    isMatch = False
                    break
        if (isMatch):
            matches += 1
    print(matches)

stringSearch(str, 'bork')