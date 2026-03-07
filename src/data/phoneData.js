// รวมข้อมูลเบอร์ทั้งหมด — เพิ่มเบอร์ใหม่แค่:
// 1. สร้างไฟล์ใน src/data/phones/เลขเบอร์.js
// 2. import แล้วเพิ่มใน array ข้างล่าง

import phone_0841535414 from "./phones/0841535414";
import phone_0951234567 from "./phones/0951234567";

const phoneNumbers = [
  phone_0841535414,
  phone_0951234567,
];

/**
 * ค้นหาข้อมูลเบอร์จาก slug
 * @param {string} slug - เลขเบอร์ เช่น "0841535414"
 * @returns {object|undefined}
 */
export function getPhoneBySlug(slug) {
  return phoneNumbers.find((phone) => phone.slug === slug);
}

export default phoneNumbers;
