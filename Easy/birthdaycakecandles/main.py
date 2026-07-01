candles = [1,3,4,4]

def birthday_cake_candles(candles):
    count = 0
    max = candles[0]

    for candle in candles:
        if candle > max:
            max = candle

    for candle in candles:
        if candle== max:
            count+=1

    return count


print(birthday_cake_candles(candles))