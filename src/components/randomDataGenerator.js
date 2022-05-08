        for (let i = 0; i < 60; i++) {
                var Status = 'sell'
                var price = Math.floor(Math.random() * (38795 - 38780 + 1) + 38780)
                price = parseInt(price) + parseFloat(Math.random().toFixed(2))
                var amount;
                amount = parseFloat(Math.random()) + parseFloat(Math.random())
                amount = amount.toFixed(5)
                var Total = amount * price


                console.log(
                        {
                                "status":Status,
                                "price":price,
                                "amount":parseFloat(amount),
                                "total":parseFloat(Total.toFixed(4))
                        },","
                )
                // console.log(Total.toFixed(2));
        }