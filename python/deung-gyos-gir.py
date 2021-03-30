def solution(m: int, n: int, puddles: [[int]]):
    memoization_table = [[0] * (m + 1) for _ in range(n + 1)]
    if puddles != [[]]:
        for [x, y] in puddles:
            memoization_table[y][x] = -1

    memoization_table[1][1] = 1

    for i in range(1, n + 1):
        for j in range(1, m + 1):
            if i == j == 1:
                continue
            if memoization_table[i][j] == -1:
                memoization_table[i][j] = 0
                continue
            from_top = memoization_table[i - 1][j]
            from_left = memoization_table[i][j - 1]
            memoization_table[i][j] = (from_top + from_left) % 1000000007
    return memoization_table[n][m]


m = 4
n = 3
paddles = [[2, 2]]
expected = 4

print("myanswer: ", solution(m, n, paddles))
print("expected: ", expected)
