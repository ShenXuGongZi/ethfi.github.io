document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=ether-fi&vs_currencies=usd';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const price = data['ether-fi'].usd;
            document.getElementById('price').textContent = `$${price}`;
        })
        .catch(error => {
            console.error('Failed to fetch data:', error);
            document.getElementById('price').textContent = 'Failed to load price';
        });
});