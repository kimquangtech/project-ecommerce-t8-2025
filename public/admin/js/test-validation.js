// Test file để kiểm tra JustValidate
console.log("Test validation file loaded");

// Kiểm tra JustValidate có được load không
if (typeof JustValidate !== 'undefined') {
  console.log("✅ JustValidate đã được load");
} else {
  console.log("❌ JustValidate chưa được load");
}

// Kiểm tra initJustValidate function
if (typeof initJustValidate !== 'undefined') {
  console.log("✅ initJustValidate function đã được định nghĩa");
} else {
  console.log("❌ initJustValidate function chưa được định nghĩa");
}

// Test validation đơn giản
document.addEventListener('DOMContentLoaded', async () => {
  console.log("DOM loaded, testing validation...");
  
  const testForm = document.querySelector('#form-article-category');
  if (testForm) {
    console.log("✅ Form found:", testForm);
    
    try {
      const validation = await initJustValidate('#form-article-category');
      console.log("✅ Validation initialized:", validation);
      
      // Test validation rules
      validation
        .addField('[name="name"]', [{
          rule: "required",
          errorMessage: "Test: Vui lòng nhập tên danh mục",
        }])
        .addField("#parent_id", [{
          rule: "required",
          errorMessage: "Test: Vui lòng chọn danh mục cha",
        }]);
      
      console.log("✅ Validation rules added");
      
    } catch (error) {
      console.error("❌ Error initializing validation:", error);
    }
  } else {
    console.log("❌ Form not found");
  }
});
