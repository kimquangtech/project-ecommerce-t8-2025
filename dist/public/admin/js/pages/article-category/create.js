const main = async () => {
  const btnSubmit = document.querySelector("[btn-submit]");
  const name = document.querySelector("[name='name']");
  const description = document.querySelector("[name='description']");
  const parent_id = document.querySelector("[name='parent_id']");

  if (!name || !parent_id || !description)  return;

  let validation;
  validation = await initJustValidate('#form-article-category');

  validation
    .addField(name, [{
        rule: "required",
        errorMessage: "Vui lòng nhập tên danh mục",
      },
      {
        rule: "minLength",
        value: 5,
        errorMessage: "Tên danh mục phải có ít nhất 5 ký tự"
      },
      {
        rule: "maxLength",
        value: 100,
        errorMessage: "Tên danh mục không được quá 100 ký tự"
      }
    ])
    .addField(description, [{
      rule: "maxLength",
      value: 255,
      errorMessage: "Mô tả không được quá 255 ký tự"
    }]);

  validation.onFail(async (fields) => {
    Object.keys(fields).forEach(key => {
      if (fields[key].errorMessage && !fields[key].isValid)

        alertError(fields[key].errorMessage);
    });
  });


  btnSubmit.addEventListener("click", async (e) => {
    const isValid = await validation.revalidate();
    if (!isValid) return;

    const formData = new FormData(document.querySelector('#form-article-category'));
    const data = {
      name: formData.get('name'),
      parent_id: formData.get('parent_id') || null,
      description: formData.get('description')
    };

    if (!btnSubmit.getAttribute("btn-submit")) return;

    confirmAlert("Thêm danh mục mới", "Bạn có chắc muốn thêm mới?", "warning", () =>{
      btnSubmitLoading(btnSubmit);
      submitForm(btnSubmit.getAttribute("btn-submit"), data)
    })
  });

  const submitForm = (link, data) => {
    axios.post(link, data)
      .then(res => {
        if (res.data.success) {
          location.reload();
          sessionStorage.setItem("alert_success", res.data.message);
        } else {
          alertError(res.data.message);
        }
      })
      .catch(err => {
        alertError("Có lỗi xảy ra khi gửi dữ liệu");
      })
  };
}

main();