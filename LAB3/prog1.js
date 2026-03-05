function fetchUserDetails(callback) {
    const user = {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com"
    };
    callback(user);
}

function fetchUserOrders(user, callback) {
    const orders = [
        { orderId: 1, item: "Laptop", amount: 1000 },
        { orderId: 2, item: "Mouse", amount: 50 }
    ];
    callback(orders);
}

fetchUserDetails((user) => {
    console.log("User ID read:", user.id);
    console.log("User Details:", user);

    fetchUserOrders(user, (orders) => {
        console.log("User Orders:", orders);
    });
});
