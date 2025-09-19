import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';



export function swalRegisterSuccess(userName = '') {
    return Swal.fire({
      title: "Registration Successful!",
      text: userName
        ? `Welcome, ${userName}!`
        : "Your account has been created.",
      icon: "success",
      confirmButtonText: "Get Started",
      customClass: {
        confirmButton:
          "swal2-confirm bg-primary hover:bg-secondary text-white rounded px-6 py-2 cursor-pointer",
        popup: "bg-base-100 text-base-content",
        title: "font-bold",
      },
      buttonsStyling: false,
      timer: 1800,
      timerProgressBar: true,
    });
}