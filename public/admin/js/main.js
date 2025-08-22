const alertError = (message) => {
  if(typeof message == "string"){
    KTToast.show({
      icon: `<i class='ki-filled ki-information-1'></i>`,
      message: message,
      appearance: 'outline',
      variant: 'destructive',
      position: "bottom-end"
    });
  } else if(typeof message == "object"){
    message.forEach(item => {
      KTToast.show({
        icon: `<i class='ki-filled ki-information-1'></i>`,
        message: item,
        appearance: 'outline',
        variant: 'destructive',
        position: "bottom-end"
      });
    });
  }
  
}

const alert_success = (message) => {
  KTToast.show({
    icon: `<i class='ki-filled ki-check-circle'></i>`,
    message: message,
    appearance: 'outline',
    variant: 'success',
    position: "top-end"
  });
}
if(sessionStorage.getItem("alert_success")){
  alert_success(sessionStorage.getItem("alert_success"));
  sessionStorage.removeItem("alert_success");
}

const confirmAlert = (title, text, icon, onConfirm) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Vâng, tôi đồng ý!",
    cancelButtonText: "Không, tôi hủy!"
  }).then((result) => {
    if (result.isConfirmed && typeof onConfirm === 'function') {
      onConfirm();
    }
  });
}

const initJustValidate = async (selector) => {
  const validation = new JustValidate(selector, {
    // validateBeforeSubmitting: true,
    // lockForm: false,
    // focusInvalidField: true,
    errorFieldCssClass: 'kt-form-error',
    successFieldCssClass: 'kt-form-success',
    errorLabelStyle: {
      color: 'var(--color-red-600)',
      fontSize: '12px',
    },
  });
  
  return validation;
}

const btnSubmitLoading = (btn) => {
  btn.setAttribute("disabled", true);
    btn.innerHTML = `<i class='ki-filled ki-loading animate-spin'></i> Đang xử lý...`;
    btn.classList.add("kt-btn-loading");
    btn.classList.remove("kt-btn-primary");
}
