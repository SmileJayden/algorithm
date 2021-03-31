def solution(money: [int]):
    memoization1 = [-1] * len(money)  # get from first
    memoization2 = [-1] * len(money)  # don't get from first

    memoization1[0] = money[0]
    memoization1[1] = money[0]
    memoization2[0] = 0
    memoization2[1] = money[1]

    for i in range(2, len(money) - 1):
        memoization1[i] = max(memoization1[i - 1], memoization1[i - 2] + money[i])
        memoization2[i] = max(memoization2[i - 1], memoization2[i - 2] + money[i])

    memoization1[-1] = memoization1[-2]
    memoization2[-1] = max(memoization2[-2], memoization2[-3] + money[-1])

    print(memoization1)
    print(memoization2)

    return max(memoization1[-1], memoization2[-1])


money = [1, 2, 3, 1]
# money = [1, 100, 1, 100, 10000]

expected = 4

print("myanswer: ", solution(money))
print("expected: ", expected)
