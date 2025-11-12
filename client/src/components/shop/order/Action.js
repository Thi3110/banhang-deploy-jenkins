import { createOrder } from "./FetchApi";

export const fetchData = async (cartListProduct, dispatch) => {
  dispatch({ type: "loading", payload: true });
  try {
    let responseData = await cartListProduct();
    if (responseData && responseData.Products) {
      setTimeout(function () {
        dispatch({ type: "cartProduct", payload: responseData.Products });
        dispatch({ type: "loading", payload: false });
      }, 1000);
    }
  } catch (error) {
    console.log(error);
  }
};

export const pay = async (
  data,
  dispatch,
  state,
  setState,
  totalCost,
  history
) => {
  if (!state.address) {
    setState({ ...state, error: "Vui lòng nhập địa chỉ giao hàng" });
  } else if (!state.phone) {
    setState({ ...state, error: "Vui lòng nhập số điện thoại" });
  } else {
    dispatch({ type: "loading", payload: true });
    let orderData = {
      allProduct: JSON.parse(localStorage.getItem("cart")),
      user: JSON.parse(localStorage.getItem("jwt")).user._id,
      amount: totalCost(),
      transactionId: Date.now(), // Tạo một ID giao dịch đơn giản
      address: state.address,
      phone: state.phone,
      paymentMethod: "COD", // Thanh toán khi nhận hàng
    };
    try {
      let responseData = await createOrder(orderData);
      if (responseData.success) {
        localStorage.setItem("cart", JSON.stringify([]));
        dispatch({ type: "cartProduct", payload: null });
        dispatch({ type: "cartTotalCost", payload: null });
        dispatch({ type: "orderSuccess", payload: true });
        dispatch({ type: "loading", payload: false });
        return history.push("/");
      } else if (responseData.error) {
        console.log(responseData.error);
        setState({ ...state, error: responseData.error });
      }
    } catch (error) {
      console.log(error);
      setState({ ...state, error: "Đã xảy ra lỗi khi đặt hàng" });
    }
    dispatch({ type: "loading", payload: false });
  }
};
