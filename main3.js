// การเรียกใช้งาน Elements
const container = document.getElementById('container');
let isParagraphCreated = false;

// การสร้าง Elements
function createParagraph() {

    const ikkew = document.createElement('button');
    ikkew.textContent = 'ikkew';
    if (!isParagraphCreated) { // ตรวจสอบว่าย่อหน้ายังไม่ถูกสร้าง
    
      const paragraph = document.createElement('p');
      paragraph.textContent = 'สร้างย่อหน้าใหม่แล้ว!';
      
      // เพิ่มความสัมพันธ์
      container.appendChild(ikkew);
      container.appendChild(paragraph);
      
      isParagraphCreated = true; // ปรับสถานะให้ย่อหน้าถูกสร้างแล้ว
    }
  }
  
const createButton = document.getElementById('createButton');

// เพิ่ม Event สำหรับคลิก
createButton.addEventListener('click', createParagraph);

// // เพิ่ม Event สำหรับ keyup
// createButton.addEventListener('keyup', function(event) {
//   if (event.key === 'Enter') {
//     createParagraph();
//   }
// });

// // เพิ่ม Event สำหรับ keydown
// createButton.addEventListener('keydown', function(event) {
//   console.log('Key down:', event.key);
// });

// // เพิ่ม Event สำหรับ keypress
// createButton.addEventListener('keypress', function(event) {
//   console.log('Key press:', event.key);
// });
