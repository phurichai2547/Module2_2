// Student ID: [รหัสนักศึกษาของคุณ]
// Firstname: [ชื่อของคุณ]
// Lastname: [นามสกุลของคุณ]

//65130500065 phuri Chainikhom

document.addEventListener('DOMContentLoaded', function () {
    // รับอิลิเมนต์
    const productInput = document.getElementById('product-input');
    const addButton = document.getElementById('add-button');
    const removeAllButton = document.getElementById('removeAll-button');
    const productList = document.getElementById('product-list');

    // เพิ่มตัว "ฟังก์ชันตัวแสดงสถานะ"
    addButton.addEventListener('click', addNewProduct);
    removeAllButton.addEventListener('click', removeAllProduct);

    function addNewProduct() {
        // รับค่าจากอินพุต
        const productName = productInput.value.trim();

        // ตรวจสอบว่าอินพุตไม่ว่าง
        if (productName !== '') {
            // สร้าง div สำหรับสินค้า
            const productDiv = document.createElement('div');
            productDiv.id = productName;
            productDiv.className = 'product-item';

            // สร้างอิลิเมนต์ p
            const pElement = document.createElement('p');
            pElement.textContent = productName;

            // สร้างปุ่ม "ลบ"
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => removeProduct(productName));

            // เพิ่มอิลิเมนต์ไปยัง div สินค้า
            productDiv.appendChild(pElement);
            productDiv.appendChild(removeButton);

            // เพิ่ม div สินค้าไปยังรายการสินค้า
            productList.appendChild(productDiv);

            // ล้างอินพุต
            productInput.value = '';
        }
    }

    function removeProduct(productId) {
        // เลือกและลบอิลิเมนต์สินค้า
        const productToRemove = document.getElementById(productId);
        if (productToRemove) {
            productList.removeChild(productToRemove);
        }
    }

    function removeAllProduct() {
        // ลบทั้งหมดอิลิเมนต์สินค้าภายในรายการสินค้า
        productList.innerHTML = '';
    }
});
