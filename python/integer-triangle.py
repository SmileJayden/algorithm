def solution(triangle: [[int]]):
    for i, row in enumerate(triangle):
        for j, elem in enumerate(row):
            if i == j == 0:
                continue
            if j == 0:
                triangle[i][j] += triangle[i - 1][j]
                continue
            if j == len(row) - 1:
                triangle[i][j] += triangle[i - 1][j - 1]
                continue
            triangle[i][j] += max(triangle[i - 1][j - 1], triangle[i - 1][j])
    return max(triangle[-1])


triangle = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]
expected = 30

print("myanswer: ", solution(triangle))
print("expected: ", expected)
