// import { useSelector, useDispatch } from 'react-redux';
// // import { hideToast } from '../../redux/toastSlice';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function Toast() {
//     const dispatch = useDispatch();
//     const { show, message } = useSelector((state) => state.toast);

//     useEffect(() => {
//         if (show) {
//             toast.success(message, {
//                 onClose: () => dispatch(hideToast()),
//             });
//         }
//     }, [show, message, dispatch]);

//     return (
//         <ToastContainer
//             position="top-right"
//             autoClose={false}
//             closeOnClick
//             pauseOnHover
//         />
//     );
// }

// export default Toast;