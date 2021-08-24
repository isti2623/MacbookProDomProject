// Memory Selectors
const memoryEight = document.getElementById("memory-eight");
const memorySixteen = document.getElementById("memory-sixteen");

const extraMemoryCost = document.getElementById("extra-memory-cost");

function updateMemory(isClick) {

    if (isClick == true) {
        extraMemoryCost.innerText = "0";
    }
    else {
        extraMemoryCost.innerText = "180";
    }
}

memoryEight.addEventListener('click', function () {
    updateMemory(true);
    updateTotalText()
})
memorySixteen.addEventListener('click', function () {
    updateMemory(false);
    updateTotalText();
})

// Storage Selector

const storageFiftySix = document.getElementById("storage-fiftysix");
const storageTwelve = document.getElementById("storage-twelve");
const storageTera = document.getElementById("storage-tera");


const extraStorageCost = document.getElementById("extra-storage-cost");

storageFiftySix.addEventListener('click', function () {
    extraStorageCost.innerText = "0";
    updateTotalText()
})

storageTwelve.addEventListener('click', function () {
    extraStorageCost.innerText = "100";
    updateTotalText()
})

storageTera.addEventListener('click', function () {
    extraStorageCost.innerText = "180";
    updateTotalText()
})

// Delivery Charge

const deliveyFree = document.getElementById("delivary-free");
const deliveyPaid = document.getElementById("delivary-paid");

const delivaryCharge = document.getElementById("delivary-charge");

function updateDelivery(isClick) {
    if (isClick == true) {
        delivaryCharge.innerText = "0";
    }
    else {
        delivaryCharge.innerText = "20";
    }
}


deliveyFree.addEventListener('click', function () {
    updateDelivery(true);
    updateTotalText()
})

deliveyPaid.addEventListener('click', function () {
    updateDelivery(false);
    updateTotalText()
})


// Total Price
const bestPrice = document.getElementById("best-price");
const totalPrice = document.getElementById("total-price");
const totalMainBalance = document.getElementById("total-main-balance");


function updateTotalText() {

    total = parseInt(bestPrice.innerText) + parseInt(extraMemoryCost.innerText) + parseInt(delivaryCharge.innerText) + parseInt(extraStorageCost.innerText);
    totalPrice.innerText = total;

    const promo = document.getElementById("promo-input").value
    if (promo === 'stevekaku') {
        total = total - total * 0.2;
    }



    totalMainBalance.innerText = total;
}