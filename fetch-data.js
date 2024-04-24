// 全局变量来存储从API获取的并经过转换的loyaltyPoints
let globalLoyaltyPoints = 0;

document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://www.etherfi.bid/api/etherfi/points';

    fetch(apiUrl)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .then(data => {
            if (data.success) {
                // 调用函数来转换并存储loyaltyPoints
                globalLoyaltyPoints = transformLoyaltyPoints(data.loyaltyPoints);
            } else {
                console.error('API returned an error:', data);
                throw new Error('API Error');
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});

function transformLoyaltyPoints(e) {
    return 37100695710 + 10 * (e - 37100695710);
}

function calculateAirdrop() {
    var yourPointsInput = document.getElementById('yourPoints').value;

    // 移除数字中的逗号
    var yourPoints = yourPointsInput.replace(/,/g, '');

    var airdropTotal = 50000000;  // 空投总量，这里是5000万枚

    if (globalLoyaltyPoints > 0 && !isNaN(yourPoints)) {
        yourPoints = parseFloat(yourPoints);
        var ratio = yourPoints / globalLoyaltyPoints;
        var airdropAmount = ratio * airdropTotal;
        document.getElementById('result').innerHTML = "空投数是: " + Math.round(airdropAmount) + " 枚ethfi";
    } else {
        document.getElementById('result').innerHTML = "请确保总积分大于0且输入的是有效数字。";
    }
}