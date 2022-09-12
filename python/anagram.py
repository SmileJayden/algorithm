def solution(text, anagram, sw):
    answer_arr = [''] * len(text)
    for (i, elem) in enumerate(anagram):
        if sw:
            answer_arr[elem] = text[i]
        else:
            answer_arr[i] = text[elem]

    return "".join(answer_arr)


print(solution("Hello", [4, 2, 0, 1, 3], True))
